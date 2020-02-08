import axios from "axios"
const  basenestmanager = process.env.VUE_APP_Nest_Manager_Backend // Getting Backend url from Envorent File
var nestaxios= axios.create({baseURL:basenestmanager}) // Creating axios Object
export default nestaxios // Export axios object
