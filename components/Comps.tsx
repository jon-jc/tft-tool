/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XSfHiKVLwcR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, Card } from "@/components/ui/card";

export default function Comps() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="grid gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid gap-4">
          <h1 className="font-semibold text-4xl">Comps</h1>
          <p className="text-gray-500 leading-loose md:pr-48 dark:text-gray-400">
            Find the best team compositions for your game. Use the search bar
            below to find the comp you want. Click on a comp to see the
            champions and items.
          </p>
          <div className="relative">
            <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="pl-8 md:w-[400px]"
              placeholder="Search for a comp"
              type="search"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <Card className="p-0">
            <CardContent className="p-0">
              <div className="grid items-center grid-cols-[40px_1fr] gap-4 p-4">
                <div className="font-semibold">1</div>
                <div className="grid items-center grid-cols-[1fr_40px] gap-4">
                  <div className="flex items-center gap-2">
                    <img
                      alt="Champion"
                      className="rounded"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>Maokai</div>
                  </div>
                  <div className="text-center">2</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="p-0">
            <CardContent className="p-0">
              <div className="grid items-center grid-cols-[40px_1fr] gap-4 p-4">
                <div className="font-semibold">2</div>
                <div className="grid items-center grid-cols-[1fr_40px] gap-4">
                  <div className="flex items-center gap-2">
                    <img
                      alt="Champion"
                      className="rounded"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>Diana</div>
                  </div>
                  <div className="text-center">1</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="p-0">
            <CardContent className="p-0">
              <div className="grid items-center grid-cols-[40px_1fr] gap-4 p-4">
                <div className="font-semibold">3</div>
                <div className="grid items-center grid-cols-[1fr_40px] gap-4">
                  <div className="flex items-center gap-2">
                    <img
                      alt="Champion"
                      className="rounded"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>Nidalee</div>
                  </div>
                  <div className="text-center">1</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="p-0">
            <CardContent className="p-0">
              <div className="grid items-center grid-cols-[40px_1fr] gap-4 p-4">
                <div className="font-semibold">4</div>
                <div className="grid items-center grid-cols-[1fr_40px] gap-4">
                  <div className="flex items-center gap-2">
                    <img
                      alt="Champion"
                      className="rounded"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>Leona</div>
                  </div>
                  <div className="text-center">1</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="p-0">
            <CardContent className="p-0">
              <div className="grid items-center grid-cols-[40px_1fr] gap-4 p-4">
                <div className="font-semibold">5</div>
                <div className="grid items-center grid-cols-[1fr_40px] gap-4">
                  <div className="flex items-center gap-2">
                    <img
                      alt="Champion"
                      className="rounded"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>Vayne</div>
                  </div>
                  <div className="text-center">1</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
