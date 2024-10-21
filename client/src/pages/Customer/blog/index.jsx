import React from "react";

const BlogPost = () => {
    return (
        <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12 text-left">
                <h1 className="text-3xl font-extrabold">Writing.</h1>
            </div>

            <div className="mb-8">
                <img
                    src="/src/assets/images/bg-register-seller.jpg"
                    alt="Cheerful Loving Couple Bakers Drinking Coffee"
                    className="w-full h-[400px] rounded-lg"
                />
            </div>
            <div className="mx-[85px]">
                <h2 className="text-3xl font-semibold mb-6 text-center">
                    Loft Office With Vintage Decor For Creative Working
                </h2>

                <p className="text-gray-600 mb-5 leading-loose text-justify ">
                    It’s no secret that the digital industry is booming. From
                    exciting startups to global brands, companies are reaching
                    out to digital agencies, responding to the new possibilities
                    available. However, the industry is fast becoming
                    overcrowded, heaving with agencies offering similar services
                    — on the surface, at least. Producing creative, fresh
                    projects is the key to standing out. Unique side projects
                    are the best place to innovate, but balancing commercially
                    and creatively lucrative work is tricky. So, this article
                    looks at ...
                </p>

                <div className="flex gap-4">
                    <button className="border-2 border-orange-500 text-black px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
                        Continue Reading
                    </button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default BlogPost;
