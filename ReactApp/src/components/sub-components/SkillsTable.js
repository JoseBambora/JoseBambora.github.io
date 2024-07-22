import React from "react"
import '../../style/ui/Table.css'

export const TableSkills = ({ skillName, skills }) => (
    <table className="my-table">
        <thead className="my-table-header">
            <tr>
                <th>{skillName}</th>
                <th>Level</th>
            </tr>
        </thead>
        <tbody className="my-table-content">
            {skills.map((skill, index) => (
                <tr key={index}>
                    <td className="column-center">{skill.name}</td>
                    <td>
                        <div className="level-box">
                            {[...Array(skill.level)].map((_, i) => (
                                <div key={i} className="level-box-fill"></div>
                            ))}
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
)