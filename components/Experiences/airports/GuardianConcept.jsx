import Image from "next/image";

const GuardianConcept = () => {
    return (
        <div className="h-[100vh] text-right pr-40 pb-30 w-screen left-0 relative flex flex-col items-center justify-start" id="guardian-concept">
            <Image
                src={'/images/wings.png'}
                width={500}
                height={550}
                className="z-[11] relative mix-blend-luminosity"
            />
            <div className="z-[11] absolute bottom-[15%] px-[5%] text-left">
                <h1 className="text-[150%]">
                    Guardian Concept
                </h1>
                <div className="flex flex-row">
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                    <div className="pl-[5%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                </div>
            </div>



        </div>
    )
}

export default GuardianConcept;