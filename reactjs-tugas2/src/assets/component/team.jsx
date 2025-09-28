import React from "react";

const Team = () => {
    const teamMembers = [
        { name: "Vanza Desviana", role: "Founder & CEO", img: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png" },
        { name: "Octaviani Nursalsabila", role: "Marketing Head", img: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png" },
        { name: "Ahmad Agus", role: "CTO", img: "https://cdn-icons-png.flaticon.com/512/2922/2922515.png" },
        { name: "Maulana Ibrahim", role: "UI/UX Designer", img: "https://cdn-icons-png.flaticon.com/512/2922/2922656.png" },
    ];

    return (
        <div id="team" className="container my-5">
            <h2 className="text-center mb-5 text-black">Meet Our Team</h2>

            <div className="row g-4 justify-content-center">
                {teamMembers.map((member, index) => (
                    <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                        <div className="card shadow-lg border-0 rounded-4 text-center p-3 h-100">
                            <img
                                src={member.img}
                                alt={member.name}
                                className="rounded-circle mb-3"
                                style={{ width: "120px", height: "120px", objectFit: "cover", margin: "0 auto" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-primary">{member.name}</h5>
                                <p className="card-text">{member.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
