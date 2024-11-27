    import React from "react";
    import { ProjectCardProps } from "../../../../types/componentTypes";
    import Image from "next/image"
import Link from "next/link";
    

    export const ProjectCard: React.FC<ProjectCardProps> = ({
      title,
      description,
      image,
      url,
    }) => {
      return (
        <div className="projects">
          <div className="projects-box ">
          <Image
          fill
            src={image}
            alt={title}
            object-fit="cover"
            className="projects-img"
          />
          </div>
          <div className="projects-data">
            <h3 className="projects-title">{title}</h3>
            <p className="projects-description">{description}</p>
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="link"> <span className="click-btn">Click Here</span>
            </Link>
          </div>
        </div>
      );
    };

