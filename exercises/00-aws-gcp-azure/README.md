# Deploying to AWS?

You: I need to run this application with `<INSERT RANDOM PROGRAMMING LANGUAGE OR FRAMEWORK HERE>`. I read on `<INSERT RANDOM SITE HERE>` that AWS `<INSERT WIRED AWS SERVICE NAME THAT DOES NOT REALATE TO THE 'UNDERLYING SOFTWARE/ARCHITECTURE HERE>` is the best way to do it! right?

Me: Don't do it. If you can find an easier solution.

You: Are you sure I heard AWS is easy and you can do `<INSERT TECHNOLOGIES HERE>`? Isn't that what Google does? Don't we need vertical and horizontal scaleability? Let me at least try to spin up a Kubernetes Cluster so we can add services later on? `<INSERT MORE CLOUD COMPUTING BUZZWORDS & ARGUMENTS HERE>` 

Me: Sure you can. If you have a hammer everything looks like a nail…

You: Hm. So I guess I'll do it on GCP or Azure then.

Me: `(－‸ლ )`

---

## Why not?

- Very steep learning curves.
- The whole configuration from Networking to SSL Certificate is mostly your problem.
- Even monitoring is pretty hard.
- We are not Google. Means many best practices for scaleability and availability are meant for very large corporations.
- tbd

<!-- TODO: Find more arguments why we don't need that -->