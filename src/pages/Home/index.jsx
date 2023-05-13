import SignUp from "../../components/SignUp/signup"


import { Carousel } from "@material-tailwind/react";



export default function Example() {
    return (
        <div className="flex h-screen">
            <div className="w-1/2">

                <div className="h-full">
                    <Carousel className="h-full">
                        <img
                            src="https://image.cnbcfm.com/api/v1/image/106864404-1617740264512-gettyimages-1232149494-amazon309_040621.jpeg?v=1617740345"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />



                        <img
                            src="https://hips.hearstapps.com/hmg-prod/images/amazon-vans-head-to-a-distribution-center-to-pick-up-news-photo-1156013446-1567704057.jpg"
                            alt="image 2"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://assets.aboutamazon.com/e5/e5/4ba8a6c9491594eb0cbc627882de/hero-001-blur-imgl2842-copy.JPG"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                </div>
                <div className="signup-container absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <SignUp />
                </div>

            </div>
            <div className="w-1/2 flex items-center justify-center">
                <h1 className="text-4xl font-bold">We're looking for talented Drivers. Apply within.</h1>
            </div>
        </div>
    );
}
