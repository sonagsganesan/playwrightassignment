/*Assignment Details:
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
`runTests` with `switch` for test type messages.
Assignment Requirements:
Create two functions : launchBrowser, runTests where,
 a) launchBrowser need to take input as browserName (string) and do not return any
 - use if-else (chrome or otherwise)
 - Print the value
 b) runTests need to take input as testType (string) and do not return any
 - use switch case (smoke, sanity, regression, default (smoke))
 - Print the values
Call that function from the javascript*/

function launchBrowser(browserName)
{
    if(browserName==='Chrome')
        console.log(`Launched ${browserName} browser`)
    else
        console.log(`Launched Other browser ${browserName}`)
}

function runTests(testType)
{
    switch(testType)
    {
        case 'Sanity':
            console.log(`Running ${testType} cases`)
            break;
        case 'Smoke':
            console.log(`Running ${testType} cases`)
            break;
        case 'Regression':
            console.log(`Running ${testType} cases`)
            break;
        default:
            console.log("Running other cases")
    }
}

//Step 1: Check for chrome and Sanity Case
launchBrowser('Chrome');
runTests('Sanity')

//Step 2: Check for otherBrowser and smoke case
launchBrowser('Firefox');
runTests('Smoke')

//Step 3: Check for default case
launchBrowser('Safari');
runTests('Regression')

//Step 4: Check for Regression case
launchBrowser('Firefox');
runTests('Other')
