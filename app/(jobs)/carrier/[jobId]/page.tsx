import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TCarrierItem } from "../../_components/JobItem";
import { Separator } from "@/components/ui/separator";
import {
  Timeline,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  TimelineTitle,
} from "../../_components/timeline";
import React from "react";
import JobButtons from "./job-buttons";

function getJobDetails(jobs: TCarrierItem[], id: string) {
  return jobs.find((job) => job.id.toLowerCase() === id.toLowerCase());
}

export default function CarrierJobDetailsPage({
  params,
}: {
  params: { jobId: string };
}) {
  const jobStatus = false;
  const data = {
    carrier: [
      {
        id: "C001",
        batchId: "B001",
        pickup: {
          id: "P001",
          name: "Pickup A",
        },
        dropoff: {
          id: "D001",
          name: "Dropoff A",
        },
        timeline: {
          standby: "10:00",
          trainline: [
            {
              time: "10:30",
              name: "Train A",
            },
            {
              time: "11:00",
              name: "Train B",
            },
          ],
          dropoff: {
            time: "11:30",
            name: "Dropoff A",
          },
        },
        orders: [],
      },
      {
        id: "C002",
        batchId: "B002",
        pickup: {
          id: "P002",
          name: "Pickup B",
        },
        dropoff: {
          id: "D002",
          name: "Dropoff B",
        },
        timeline: {
          standby: "10:15",
          trainline: [
            {
              time: "10:45",
              name: "Train C",
            },
            {
              time: "11:15",
              name: "Train D",
            },
          ],
          dropoff: {
            time: "11:45",
            name: "Dropoff B",
          },
        },
        orders: [],
      },
      {
        id: "C003",
        batchId: "B003",
        pickup: {
          id: "P003",
          name: "Pickup C",
        },
        dropoff: {
          id: "D003",
          name: "Dropoff C",
        },
        timeline: {
          standby: "10:30",
          trainline: [
            {
              time: "11:00",
              name: "Train E",
            },
            {
              time: "11:30",
              name: "Train F",
            },
          ],
          dropoff: {
            time: "12:00",
            name: "Dropoff C",
          },
        },
        orders: [],
      },
      {
        id: "C004",
        batchId: "B004",
        pickup: {
          id: "P004",
          name: "Pickup D",
        },
        dropoff: {
          id: "D004",
          name: "Dropoff D",
        },
        timeline: {
          standby: "10:45",
          trainline: [
            {
              time: "11:15",
              name: "Train G",
            },
            {
              time: "11:45",
              name: "Train H",
            },
          ],
          dropoff: {
            time: "12:15",
            name: "Dropoff D",
          },
        },
        orders: [],
      },
      {
        id: "C005",
        batchId: "B005",
        pickup: {
          id: "P005",
          name: "Pickup E",
        },
        dropoff: {
          id: "D005",
          name: "Dropoff E",
        },
        timeline: {
          standby: "11:00",
          trainline: [
            {
              time: "11:30",
              name: "Train I",
            },
            {
              time: "12:00",
              name: "Train J",
            },
          ],
          dropoff: {
            time: "12:30",
            name: "Dropoff E",
          },
        },
        orders: [],
      },
      {
        id: "C006",
        batchId: "B006",
        pickup: {
          id: "P006",
          name: "Pickup F",
        },
        dropoff: {
          id: "D006",
          name: "Dropoff F",
        },
        timeline: {
          standby: "11:15",
          trainline: [
            {
              time: "11:45",
              name: "Train K",
            },
            {
              time: "12:15",
              name: "Train L",
            },
          ],
          dropoff: {
            time: "12:45",
            name: "Dropoff F",
          },
        },
        orders: [],
      },
      {
        id: "C007",
        batchId: "B007",
        pickup: {
          id: "P007",
          name: "Pickup G",
        },
        dropoff: {
          id: "D007",
          name: "Dropoff G",
        },
        timeline: {
          standby: "11:30",
          trainline: [
            {
              time: "12:00",
              name: "Train M",
            },
            {
              time: "12:30",
              name: "Train N",
            },
          ],
          dropoff: {
            time: "13:00",
            name: "Dropoff G",
          },
        },
        orders: [],
      },
      {
        id: "C008",
        batchId: "B008",
        pickup: {
          id: "P008",
          name: "Pickup H",
        },
        dropoff: {
          id: "D008",
          name: "Dropoff H",
        },
        timeline: {
          standby: "11:45",
          trainline: [
            {
              time: "12:15",
              name: "Train O",
            },
            {
              time: "12:45",
              name: "Train P",
            },
          ],
          dropoff: {
            time: "13:15",
            name: "Dropoff H",
          },
        },
        orders: [],
      },
      {
        id: "C009",
        batchId: "B009",
        pickup: {
          id: "P009",
          name: "Pickup I",
        },
        dropoff: {
          id: "D009",
          name: "Dropoff I",
        },
        timeline: {
          standby: "12:00",
          trainline: [
            {
              time: "12:30",
              name: "Train Q",
            },
            {
              time: "13:00",
              name: "Train R",
            },
          ],
          dropoff: {
            time: "13:30",
            name: "Dropoff I",
          },
        },
        orders: [],
      },
      {
        id: "C010",
        batchId: "B010",
        pickup: {
          id: "P010",
          name: "Pickup J",
        },
        dropoff: {
          id: "D010",
          name: "Dropoff J",
        },
        timeline: {
          standby: "12:15",
          trainline: [
            {
              time: "12:45",
              name: "Train S",
            },
            {
              time: "13:15",
              name: "Train T",
            },
          ],
          dropoff: {
            time: "13:45",
            name: "Dropoff J",
          },
        },
        orders: [],
      },
      {
        id: "C011",
        batchId: "B011",
        pickup: {
          id: "P011",
          name: "Pickup K",
        },
        dropoff: {
          id: "D011",
          name: "Dropoff K",
        },
        timeline: {
          standby: "12:30",
          trainline: [
            {
              time: "13:00",
              name: "Train U",
            },
            {
              time: "13:30",
              name: "Train V",
            },
          ],
          dropoff: {
            time: "14:00",
            name: "Dropoff K",
          },
        },
        orders: [],
      },
    ]
  };
  const details = getJobDetails(data.carrier, params.jobId);
  if (!details) {
    return <div>Job not found</div>;
  }
  return (
    <div className="p-4 flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-center font-bold">
            Batch ID: {details.batchId}
          </CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="flex flex-col grow w-full">
          <div className="flex flex-row justify-between mt-4">
            <p className="font-bold">Stand-by Time:</p>
            <p>{details.timeline.standby}</p>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <p className="font-bold">Arrival Time:</p>
            <p>{details.timeline.trainline[0].time}</p>
          </div>
          <div className="flex flex-row mt-5 grow w-full px-3">
            <Timeline className="w-full">
              {details.timeline.trainline.map((location, index) => {
                return (
                  <TimelineItem key={location.name}>
                    <TimelineHeader className="w-full">
                      <TimelineIcon />
                      <TimelineTitle className="flex flex-row justify-between w-full">
                        <div>{location.name}</div>
                        <div>{location.time}</div>
                      </TimelineTitle>
                    </TimelineHeader>
                    {index === details.timeline.trainline.length - 1 ? null : (
                      <TimelineConnector />
                    )}
                  </TimelineItem>
                );
              })}
            </Timeline>
          </div>
          <div className="flex flex-row justify-between mt-4">
            <p className="font-bold">Dropoff @{details.timeline.dropoff.name}</p>
            <p>{details.timeline.dropoff.time}</p>
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="mt-4">
          <JobButtons status={jobStatus} jobId={params.jobId} />
        </CardFooter>
      </Card>
      <div></div>
    </div>
  );
}
