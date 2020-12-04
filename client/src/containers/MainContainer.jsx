import React, {useState, useEffect} from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
import {getAllProjects} from '../services/projects';
import {getAllSkills} from '../services/skills';
import Home from '../screens/Home';
import Messages from '../screens/Messages';
import Projects from '../screens/Projects';
import UserOptions from '../screens/UserOptions';
import './MainContainer.css';

function MainContainer(props) {
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchProjects = async () => {
            const projectData = await getAllProjects();
            setProjects(projectData);
        }
        const fetchSkills = async () => {
            const skillData = await getAllSkills();
            setSkills(skillData);
        }
        fetchProjects();
        fetchSkills();
    }, []);

    return (
        <div className='MainContainer-layout'>
            <Switch>
                <Route path='/projects'>
                    <Projects 
                        projects={projects}
                        skills={skills}
                    />
                </Route>
                <Route path='/messages'>
                    {props.currentUser ?
                        <Messages /> 
                    : <></>}
                </Route>
                <Route path='/userOptions'>
                    {props.currentUser ?
                        <UserOptions
                            currentUser={props.currentUser}
                        />
                    : <></>}
                </Route>
                <Route path='/'>
                    <Home skills={skills}/>
                </Route>
            </Switch>
        </div>
    );
}

export default MainContainer;