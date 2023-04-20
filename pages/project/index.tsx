import { Project } from "@/models/Project";
import axios from "@/utils/axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

// static props
export const getStaticProps = async () => {
  return {
    props: {
      title: "Project",
    },
  };
};

const ProjectPage = (props: Props) => {
  const router = useRouter()
  const [isLoad, setIsLoad] = useState<boolean>(true);
  const [projectList, setProjectList] = useState<Project[]>([]);
  const title = `Project`;

  useEffect(() => {

    // get data from server
    const fetchProjects = async () => {
        try {

            const response = await fetch("http://localhost:8080/api/project", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": 'Bearer 5X7UctKno_VONBPuN4z0VUASGA8',
                },
                // set query
                // query: {
                //     company: '8ed1e3c8-6c7e-b075-5980-7f96a49ce61f'
                

                // set body
                // body: JSON.stringify({
                //     company: '8ed1e3c8-6c7e-b075-5980-7f96a49ce61f'
                // })
                
            });
            // const response = await fetch({
            //     url: `http://localhost:8080/api/project`,
            //     method: "GET",
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Authorization": 'Bearer 5X7UctKno_VONBPuN4z0VUASGA8',
            //     },
            //     // set params
            //     params: {
            //         company: '8ed1e3c8-6c7e-b075-5980-7f96a49ce61f'
            //     }
                
            // });
            const data = await response.json();
            console.log(response);
            

            if( data.data ){
                setProjectList(data.data);
            }
            
            
        } catch (error) {
            console.log("error", error);
        } finally {
            setIsLoad(false);
        }
    };

    const getProjects = async () => {
      try {
        const { data: response } = await axios.get("/project?company=8ed1e3c8-6c7e-b075-5980-7f96a49ce61f");

        if( response.data ){
            setProjectList(response.data);
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoad(false);
      }
    };
if(typeof window !== 'undefined'){
    getProjects();
}
  
  }, [router.isReady]);

  if (isLoad) {
    return <div>Loading...</div>;
  }

  // view
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>Name</th>
          </tr>
        </tbody>

        <tbody>
          {projectList.map((item: Project, i: any) => {
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.projectName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectPage;
