## How to Add the ENV File in the Dorky:

 - First Add the env : dorky add .env (where .env is the file name)
 - Second Step is to push the File to the Dorky : dorky push
 - Third step to delete the env file from the local
 - Fourth step is to pull the env file from the Dorky: dorky pull

## How to Fetch the Env from the Dorky:

- First Initialize the Dorky : dorky init
- Second step is to Pull the Files : dorky pull

## How to remove a file from the project:

- Remove files using: dorky reset .env (Where .env is the file_name)
- Push files to S3 bucket using: dorky push.

## How to Push the Files to S3 Bucket :

- Initialize dorky setup in the root folder of your project:  dorky init
- List the files : dorky list  (make sure to add excluded file or folder patterns to .dorkyignore, to minimize the list).
- Add files to stage-1 : dorky add .env (where .env is the file name)
- Push files to S3 bucket : dorky push
