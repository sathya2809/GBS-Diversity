import Course from "../models/courses.model.js";
import User from "../models/users.model.js";
import Mentee from "../models/mentees.model.js";
import Mentor from "../models/mentors.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const getRecommendedCourses = async (req, res) => {
    const { user_id } = req.body;
    const user = await User.findOne({ user_id });
    if (!user) {
        return res.status(400).json({ message: "User does not exist" });
    }
    let curr;
    if (user.role == 1) {
        curr = await Mentor.findOne({ user_id });
    }
    else {
        curr = await Mentee.findOne({ user_id });
    }

    const matchingCourses = await Course.aggregate([
        {
            $match: {
                $or: [
                    { skills: { $in: curr.skills || [] } },
                    { interests: { $in: curr.interests || [] } },
                    { career_goal: curr.career_goal }
                ]
            }
        },
        {
            $addFields: {
                score: {
                    $add: [
                        { $cond: [{ $eq: ["$career_goal", user.career_goal] }, 20, 0] },
                        { $size: { $setIntersection: ["$skills", user.skills || []] } },
                        { $size: { $setIntersection: ["$interests", user.interests || []] } }
                    ]
                }
            }
        },
        { $sort: { score: -1 } }
    ]);
    

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                {
                    success: true,
                    matchingCourses,
                },
                "Courses Sent"
            )
        );
};
