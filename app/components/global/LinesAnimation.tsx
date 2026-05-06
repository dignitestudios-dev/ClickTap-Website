import Lines from "./Lines";

const LineAnimation = () => {
    return (
        <div>
            <div className="line-animation-container">
                {/* Icons */}

                <div style={{ gridColumn: "1 / -1" }}>
                    <Lines />
                </div>

                {/* Logo */}
            </div>
        </div>
    );
};

export default LineAnimation;