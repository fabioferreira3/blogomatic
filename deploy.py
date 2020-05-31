import os
import shutil
import subprocess


def runstuff(userargs):
    subprocess.call(userargs, stderr=subprocess.DEVNULL, stdout=subprocess.DEVNULL)


def deploy(project, commitmsg):
    distfolder = "public"
    projectspath = "/Users/fabioferreira/Documents/projects"
    blogomaticpath = os.path.join(projectspath, "blogomatic")
    buildpath = os.path.join(blogomaticpath, distfolder)
    projectpath = os.path.join(projectspath, project)
    targetbuildpath = os.path.join(projectpath, distfolder)
    print("Cleaning local dist folder...")
    if os.path.isdir(targetbuildpath):
        shutil.rmtree(targetbuildpath)
    os.chdir(blogomaticpath)
    print("Building the project...")
    runstuff(["gatsby", "build"])
    print("Publishing to local dist...")
    shutil.copytree(buildpath, targetbuildpath)
    os.chdir(targetbuildpath)
    print("Adding files to versioning...")
    runstuff(["git", "add", "."])
    print("Commiting local dist to git...")
    runstuff(["git", "commit", "-am", commitmsg])
    print("Pushing to master...")
    runstuff(["git", "push", "origin", "master"])
    print("Deployment Completed!")
