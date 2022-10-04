// const {google} = require('googleapis')
// const {OAuth2} = google.auth
//  const oAuth2client = new OAuth2 ('11268961226-negkjapqvjo3vfj82i6aigcs0vjutvge.apps.googleusercontent.com' , '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')

//  oAuth2client.setCredentials({refresh_token:'1//04euy6oFhp704CgYIARAAGAQSNwF-L9Irt0nsMd13g12lysXx8Q-gDPLUPtHkhNk15rdBCGVhOj3Z-jQMksowF3L3ygFWbLKqf8I'})

//  const calendar = google.calendar({version : 'v3' , auth :oAuth2client})

//  const eventStartTime = new Date ()
//  eventStartTime.setDate(eventStartTime.getDate())
 
//  const eventEndTime = new Date ()
//  eventEndTime.setDate(eventEndTime.getDate())
//  eventEndTime.setMinutes(eventEndTime.getMinutes() + 30)

//  const event = {
//     summary : 'appointment',
//     location :'Sfax', 
//     description : 'doctor appointment online',
//     start : {
//         dateTime: eventStartTime,
//         timeZone : 'Tunisia/Sfax',
//     },
//     end : {
//         dateTime : eventEndTime,
//         timeZone : 'Tunisia/Sfax'

//     },
//     colorID : 1,

//  }

//  calendar.freebusy.query({
//     resource:
//     {
// timeMin : eventStartTime,
// timeMax : eventEndTime,
// timeZone : 'Tunisia/Sfax',
// items : [{id : 'primary'}]
//     },
//  },
//  (err,res)=>{
//     if (err) return console.error('free busy error', err)
//  const eventsArr = res.data.calendars.primary.busy
//     if(eventsArr.length === 0) 
//     return calendar.events.insert(
//         {calendarId : 'primary' , resource : event , auth : oAuth2client} ,
//          err =>{ 
//             if (err) return console.error ('calender event creation error',err) 
//             return console.log('calender event created')
//         }
//         )
//     return console.log('sorry im busy')
//  })
// Require google from googleapis package.
const { google } = require('googleapis')

// Require oAuth2 from our google instance.
const { OAuth2 } = google.auth

// Create a new instance of oAuth and set our Client ID & Client Secret.
const oAuth2Client = new OAuth2(
  '11268961226-negkjapqvjo3vfj82i6aigcs0vjutvge.apps.googleusercontent.com',
  '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'
)

// Call the setCredentials method on our oAuth2Client instance and set our refresh token.
oAuth2Client.setCredentials({
  refresh_token: '1//04euy6oFhp704CgYIARAAGAQSNwF-L9Irt0nsMd13g12lysXx8Q-gDPLUPtHkhNk15rdBCGVhOj3Z-jQMksowF3L3ygFWbLKqf8I',
})

// Create a new calender instance.
const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

// Create a new event start date instance for temp uses in our calendar.
const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDay() + 2)

// Create a new event end date instance for temp uses in our calendar.
const eventEndTime = new Date()
eventEndTime.setDate(eventEndTime.getDay() + 4)
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)

// Create a dummy event for temp uses in our calendar
const event = {
  summary: `${req.body.summary}`,
  location: `${req.body.location}`,
  description:`${req.body.description}`,
  colorId: 1,
  start: {
    dateTime: eventStartTime,
    timeZone: 'Tunisia',
  },
  end: {
    dateTime: eventEndTime,
    timeZone: 'Tunisia',
  },
}

// Check if we a busy and have an event on our calendar for the same time.
calendar.freebusy.query(
  {
    resource: {
      timeMin: eventStartTime,
      timeMax: eventEndTime,
      timeZone: 'America/Denver',
      items: [{ id: 'primary' }],
    },
  },
  (err, res) => {
    // Check for errors in our query and log them if they exist.
    if (err) return console.error('Free Busy Query Error: ', err)

    // Create an array of all events on our calendar during that time.
    const eventArr = res.data.calendars.primary.busy

    // Check if event array is empty which means we are not busy
    if (eventArr.length === 0)
      // If we are not busy create a new calendar event.
      return calendar.events.insert(
        { calendarId: 'primary', resource: event },
        err => {
          // Check for errors and log them if they exist.
          if (err) return console.error('Error Creating Calender Event:', err)
          // Else log that the event was created.
          return console.log('Calendar event successfully created.')
        }
      )

    // If event array is not empty log that we are busy.
    return console.log(`Sorry I'm busy...`)
  }
)