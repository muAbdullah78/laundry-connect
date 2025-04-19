# Deployment Guide for LaundryConnect

This document provides step-by-step instructions for deploying the LaundryConnect platform to Vercel.

## Prerequisites

- GitHub account (muAbdullah78)
- Vercel account (sign up at vercel.com using your email muabdullah9987@gmail.com)
- The LaundryConnect codebase from GitHub

## Deploying to Vercel

### Step 1: Connect GitHub to Vercel

1. Sign up or log in to Vercel (https://vercel.com)
2. Go to your Vercel dashboard
3. Click "Add New" > "Project"
4. Select "Import Git Repository"
5. Connect your GitHub account if not already connected
6. Grant Vercel access to your repositories
7. Select the "laundry-connect" repository

### Step 2: Configure Deployment Settings

1. Keep the default settings:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `next build`
   - Output Directory: .next
2. Add the following environment variables if needed:
   - `NEXT_PUBLIC_API_URL`: Your API URL if using a separate backend
   - `NEXT_PUBLIC_SITE_URL`: Your site's URL (will be auto-populated)

### Step 3: Deploy

1. Click "Deploy"
2. Wait for the build and deployment to complete (usually 1-2 minutes)
3. Once deployed, Vercel will provide you with a URL (e.g., laundry-connect.vercel.app)

### Step 4: Set Up Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Click "Add" and enter your domain (e.g., laundryconnect.pk)
3. Follow the instructions to configure your DNS settings
4. Wait for DNS propagation (can take up to 48 hours)

## Continuous Deployment

Vercel automatically sets up continuous deployment from your GitHub repository:

1. Any push to the main branch will trigger a new deployment
2. Pull requests will generate preview deployments
3. You can view deployment history in the Vercel dashboard

## Monitoring and Logs

1. Access logs from your Vercel dashboard
2. Go to your project > "Deployments" > select a deployment > "Logs"
3. Monitor performance in the "Analytics" section

## Troubleshooting Deployment Issues

### Build Failures

1. Check the build logs in Vercel
2. Ensure all dependencies are correctly listed in package.json
3. Verify that the build command is correct
4. Check for any environment variables that might be missing

### Runtime Errors

1. Check the Function Logs in Vercel
2. Use the Vercel CLI for local debugging: `vercel dev`
3. Verify API endpoints and external services are accessible

## Rollback to Previous Deployment

If a deployment causes issues:

1. Go to your project in the Vercel dashboard
2. Navigate to "Deployments"
3. Find a previous working deployment
4. Click the three dots menu > "Promote to Production"

## Ownership and Access Control

As the owner of the Vercel project:

1. You can add team members in "Settings" > "Team Members"
2. Control deployment permissions
3. Manage environment variables
4. Access billing and usage information

Remember to keep your Vercel account credentials secure as they provide complete control over your deployment.
