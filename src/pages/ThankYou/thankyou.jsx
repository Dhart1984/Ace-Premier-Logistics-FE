import { Typography } from "@material-tailwind/react";

 
export default function ThankYou() {
  return (
    <figure className="relative h-full w-full">
      <img
        className="h-full w-full rounded-xl"
        src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1024,h_683/https://warehouse.ninja/wp-content/uploads/2021/11/amazon-delivery-van-1024x683.jpg"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            Thank You for Applying
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            20 July 2022
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray">
          A recruiter will be in contact with you soon!
        </Typography>
      </figcaption>
    </figure>
  );
}