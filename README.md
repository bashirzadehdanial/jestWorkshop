author: Tony Beaumont
summary: Workshop on Jest for testing
id: docs
categories: digital 
environments: Web
status: Published
feedback link: mailto:a.j.beaumont@aston.ac.uk


# Testing with Jest

## Welcome

This workshop looks at writing unit tests in Jest.

### Introduction

This workshop goes with Sprint 3 of Structuring and testing data (See [https://programming.codeyourfuture.io/structuring-data/sprints/3/](https://programming.codeyourfuture.io/structuring-data/sprints/3/)


> aside positive
> ### Important
> 
> You should have completed the prep for this sprint from [https://programming.codeyourfuture.io/structuring-data/sprints/3/prep/](https://programming.codeyourfuture.io/structuring-data/sprints/3/prep/) 

### What you should already know

As a trainee you should:
* be able to write Javascript functions
* be able to write Jest unit tests as described in the prep.

### What you'll learn

* How to write unit tests
* How to design tests
* How to think about the relationship between tests and your code
* How to do Test Driven Development

### What you'll need

You will need a computer with the latest versions of this software installed:

* VS Code
* node ([https://nodejs.org/en/download/package-manager](https://nodejs.org/en/download/package-manager)
* npm

These are the versions I have installed:
```console
$ node --version
v21.2.0
$ npm --version
10.9.0
```


### What you'll do

The following pages will take you through all the steps of the workshop.

* Clone a copy of the workshop from 
* Access the dashboard
* Find applicant submissions and give feedback

## Where to find the Workshop

Before you can review the work submitted by applicants, you should familiarise yourself with the syllabus.

The syllabus for ITD is here: [https://cyf-itd.netlify.app/](https://cyf-itd.netlify.app/). This is a screenshot of the syllabus home page:<br/>
	![syllabus home page](images/syllabusHome.png)

Applicants will work through the steps week by week.  Each step contains instructions for the applicants to do complete a task which they should then submit.  Volunteers can find these submissions on the dashboard and give feedback.  There is a page which just contains the steps in order and that is here: [https://cyf-itd.netlify.app/steps/](https://cyf-itd.netlify.app/steps/).  The Workshops will be organised by each region, and are designed to be face-to-face opportunities for applicants to ask questions and clarify their learning.  Workshops will be advertised on Eventbrite and advertised in slack.

You will find that each step has a number of sub-components reachable via a menu which looks like this:<br/>
	![Components of a step are Instructions Acceptance Criteria Submission Help and Extensions](images/StepComponents.png).

* The **Instructions** tell the applicant what to do.  Volunteers should read this too so that you fully understand what is being asked of the volunteers in each step.
* The **acceptance criteria** list everything the the applicant must do to successfully complete the step.  
* The **Submission** item tells the applicants what to submit.  Volunteers can find these submissions in the dashboard.  
* The **Help** item tells the applicants how to get help.  
* The **Extensions** item gives a suggestion of other things a applicant can do in this step, but which don't have to be submitted.

## How to access the Dashboard

These instructions come from **Step 4** in the `#cyf-intro-to-digital-course` canvas ([https://codeyourfuture.slack.com/canvas/C01332PNRTN](https://codeyourfuture.slack.com/canvas/C01332PNRTN) so please refer to that first as it contains links to the instructions your should  follow to access the dashboard.  The information below is just designed to summarise those instructions..

1. Volunteers need to access the Dashboard [https://dashboard.codeyourfuture.io/](https://dashboard.codeyourfuture.io/)
1. Sign in using GitHub.  
1. If you are just registering as a new volunteer you should complete the application form.
1.  If you have already registered, click the link at the top which says 
	```console
	Important: If you already completed this form in some point please click here.
	```
	This takes you to a page where you enter your email address and you will then get sent an email to confirm your login and thereafter you will be able to access the dashboard directly.  If you have problems, post a question into the slack channel `#cyf-intro-to-digital-course`<br/>
1. Once you are in, the home screen of the dashboard looks like this:<br/>
	![the dashboard home screen](images/dashboardHome.png)<br/>
	The menu at the top has links to the home page and the ITD programme.  There will be other programs linked here as and when they start and have applicants on them.

## Using the dashboard:  Seeing Applicants

If you click on `See Applicants` in the **New Applicants** box, you will see a list of all the new applicants.<br/>
	![list of applicants](images/listOfApplicantsEdited.png)

	
The blue Email button allows you to email applicants.
	
In my screen I can download a CSV file containing the details of the applicants, but you may not have this option.

You can use the `FILTERS` button to filter the view and see applicants in different areas, or limit the steps displayed.  This screenshot shows some of the filter options:<br/>
	![The filter options](images/filters.png)


## Using the dashboard: Reviewing work submitted by applicants

If you click on `Review Steps` in the **Steps** box you will see a list of those applicants who have submitted work for one or more of the steps in the ITD syllabus.  The view is a subset of all the applicants and looks similar:<br/>
	![list of applicants](images/listOfApplicantsEdited.png)<br/>
	* You can see that `Applicant 1` has submitted work for Step 0 but it hasn't yet been approved.  That is indicated by the `0` in the **Steps** column.  
	* `Applicant 2` has also submitted work for Step 0 and it has been approved because there is a tick AND a 0 in the **Steps** column.
	
### How to view submissions

* Click on the **name** of one of the applicants.  You will see a menu appear like this one:<br/>
	![review options](images/reviewOptions.png).
* If you click on **Steps** you will see what the applicant has submitted for the ITD steps.  The example below shows the applicant has submitted work for three steps and you are looking at their submission link for STEP 1:
	![reviewing steps](images/reviewSteps.png)
	Clicking the **Submitted** link will allow you to see their submitted work.  

### How to review a submission

When reviewing a submission there are three things you can do:
* **Communicating with the applicant**: If you click the **Comments button**<br/>
	![comment button](images/commentButton.png)<br/>
	you can see comments left by other volunteers and add your own comments.  You should post a comment back to the applicant if you have questions and you are not yet able to approve or reject the work.  It is also good practice to post a comment when you reject a submission so the applicant can see why their work was rejected.  You can comment after approving work to highlight what the applicant did well.
* **Approving work**:  When you are ready to approve the submitted work as meeting the acceptance criteria, click the **Approve button**.  If you want to highlight work that you thought was good practice (or bad practice), leave a comment.<br/>
	![approve the work](images/reviewApprove.png)<br/>
	Do not approve the work unless it meets the acceptance criteria.
* **Rejecting work**: If you are rejecting the work as not meeting the acceptance criteria, click the **Reject button**<br/>
	![rejecting work](images/reviewReject.png)<br/>
	You should leave comments to say why the work was rejected.
* **Undoing a decision**: If you want to change your mind about approving or rejecting a piece of work, can click the Undo button as shown in this screenshot:<br/>
	![Undoing a decision](images/undoButton.png)<br/>
	You should post a comment to the applicant to let them know why the decision was changed.

## Using the dashboard: Workshops

If you click the **Workshops** option under a applicant's name, you are able to record whether or not they attended a workshop and leave some text as context.  Here is what the option looks like:<br/>
	![workshop records](images/workshops.png)
	
## Useful URLs

Here is a quick list of useful links (some are for applicants only, but it is helpful to know them if an applicant has a problem):
* **The ITD Syllabus:** [https://cyf-itd.netlify.app/](https://cyf-itd.netlify.app/).  There is an overview of **how ITD works** in the syllabus here: [https://cyf-itd.netlify.app/how-itd-works/](https://cyf-itd.netlify.app/how-itd-works/).
* **ITD signup page (for applicants only):** [https://codeyourfuture.io/itc/](https://codeyourfuture.io/itc/)
* **CYF Learning Platform (for applicants only):** [https://course1.codeyourfuture.io/](https://course1.codeyourfuture.io/)
* **ITD Slack Channel:** [https://codeyourfuture.slack.com/archives/C01332PNRTN](https://codeyourfuture.slack.com/archives/C01332PNRTN).  Post into the slack channel if you have questions or problems.
* **ITD Canvas:** [https://codeyourfuture.slack.com/canvas/C01332PNRTN](https://codeyourfuture.slack.com/canvas/C01332PNRTN).  The canvas is the official CYF information about ITD. The canvas is attached to the ITD slack channel.
* **CYF Dashboard:** [https://dashboard.codeyourfuture.io/](https://dashboard.codeyourfuture.io/).  Use the dashboard to view applicant progress.
* **Acceptance Criteria:** These are what you refer to when approving applicants work:
  * **Step 1**: [https://cyf-itd.netlify.app/steps/one/#acceptance-criteria](https://cyf-itd.netlify.app/steps/one/#acceptance-criteria)
  * **Step 2**: [https://cyf-itd.netlify.app/steps/two/#acceptance-criteria](https://cyf-itd.netlify.app/steps/two/#acceptance-criteria)
  * **Step 3**: [https://cyf-itd.netlify.app/steps/three/#acceptance-criteria](https://cyf-itd.netlify.app/steps/three/#acceptance-criteria)
  * **Step 4**: [https://cyf-itd.netlify.app/steps/four/#acceptance-criteria](https://cyf-itd.netlify.app/steps/four/#acceptance-criteria)
  * **Step 5**: [https://cyf-itd.netlify.app/steps/five/#acceptance-criteria](https://cyf-itd.netlify.app/steps/five/#acceptance-criteria)
  * **Step 6**: [https://cyf-itd.netlify.app/steps/six/#acceptance-criteria](https://cyf-itd.netlify.app/steps/six/#acceptance-criteria)

## To be continued...
