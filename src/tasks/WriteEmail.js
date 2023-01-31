import React, { useState } from "react";
import ThankYouPic from "./ThankYouPic";

export default function WriteEmailTask (props) {
    const [submitted, setSubmitted] = useState(0);

    if (submitted) {
        return (
            <section className="thank-you pt-6">
                <ThankYouPic />
                <h2 className="text-lg font-bold mt-4">Thank you!</h2>
                <p className="text-base my-2">
                    You just helped save Boys and Girls club <strong>5mins</strong>. You have
                    so far saved <strong>1hr 25mins</strong> for nonprofits. Keep up the amazing work. 🎉 
                </p>
                <button
                    className="mt-4 px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"
                    onClick={() => setSubmitted(0)}
                >
                    Next Task
                </button>
            </section>
        );
    }

    return (
        <section className="write-email">
            <h2 className="text-lg font-bold">Task: Send a thank you email</h2>
            <h3 className="text-sm">
            Boys and Girls Club, Seattle
            </h3>
            <p className="text-base my-2">
            On 21 Jan 2023, we hosted an auction to support the activities of the Boys and Girls Club of Seattle.
            In total we raised $265,000 by selling 1200 items to 940 individuals in the online auction. We need help
            writing personalized thank you emails to the buyers in the auction for their support. Following are the details:
            </p>
            <p className="text-base my-2">
            <strong>Name:</strong> Jane Doe<br/>
            <strong>Item:</strong> Signed Seattle Seahawks Helmet<br/>
            <strong>Price:</strong> $2,000<br/>
            </p>
            <form>
            <textarea className="my-2 text-base p-2" placeholder="Write email body here" />
            <button
                className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"
                onClick={() => setSubmitted(1)}
            >
                Send email
            </button>
            </form>
        </section>
    );
}