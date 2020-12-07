import React, {useState, useEffect} from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
import {getAllProjects} from '../services/projects';
import {getAllSkills, createSkill, editSkill, deleteSkill} from '../services/skills';
import {getAllMessages} from '../services/message';
import Home from '../screens/Home';
import Messages from '../screens/Messages';
import Projects from '../screens/Projects';
import UserOptions from '../screens/UserOptions';
import './MainContainer.css';

function MainContainer(props) {
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [messages, setMessages] = useState([]);
    const [updated, setUpdated] = useState(false);
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
        const fetchMessages = async () => {
            const messageData = await getAllMessages();
            setMessages(messageData);
        }
        fetchProjects();
        fetchSkills();
        fetchMessages();
    }, []);

    useEffect(() => {
        const fetchProjects = async () => {
            const projectData = await getAllProjects();
            setProjects(projectData);
        }
        const fetchSkills = async () => {
            const skillData = await getAllSkills();
            setSkills(skillData);
        }
        const fetchMessages = async () => {
            const messageData = await getAllMessages();
            setMessages(messageData);
        }
        fetchProjects();
        fetchSkills();
        fetchMessages();
    }, [updated]);

    async function handleCreateSkill(skillData) {
        const newSkill = await createSkill(skillData);
        setSkills(prevState => [...prevState, newSkill])
    }
    async function handleEditSkill(id, skillData) {
        await editSkill(id, skillData);
        setUpdated(prevState => !prevState)
    }
    async function handleDeleteSkill(id) {
        await deleteSkill(id);
        setUpdated(prevState => !prevState)
    }
    
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
                        <Messages 
                            messages={messages}
                        /> 
                    : <></>}
                </Route>
                <Route path='/userOptions'>
                    {props.currentUser ?
                        <UserOptions
                            currentUser={props.currentUser}
                            skills={skills}
                            handleCreateSkill={handleCreateSkill}
                            handleEditSkill={handleEditSkill}
                            handleDeleteSkill={handleDeleteSkill}
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