module.exports =

[{
	name: "web",
	repo: "https://gitlab.inria.fr/sed-rennes/sharelatex/web-sharelatex.git",
  //version: "c27438b8042fc9d9e12136f4e805a690cde7c13d"
  // NOTE(msimonin): There's something bad about git refs here
  // above is the theorical ref obtained using revisions.txt
  // below is the real obtained by browsing the history because the above wasn't found
  // version: "85cf009ce9c4468b1644ddb87c8ad3bebb76ec70"
	version: "inria-1.2.1"
}, {
	name: "real-time",
	repo: "https://github.com/sharelatex/real-time-sharelatex.git",
	version: "aff98de9d055ac7c4e238324fd1f062cfee90be4"
}, {
	name: "document-updater",
	repo: "https://github.com/sharelatex/document-updater-sharelatex.git",
	version: "bb64ab47851b500bd51de6409b97d8edc367eed8"
}, {
	name: "clsi",
	repo: "https://gitlab.inria.fr/sed-rennes/sharelatex/clsi-sharelatex.git",
    //	version: "12c1dc632a7afb090fb87db6d96d9be2e8bfb0cd"
	version: "inria-1.2.1"
}, {
	name: "filestore",
	repo: "https://github.com/sharelatex/filestore-sharelatex.git",
	version: "c2eb0f6a780c879574ca3d6d4f33ad614560fef6"
}, {
	name: "track-changes",
	repo: "https://github.com/sharelatex/track-changes-sharelatex.git",
	version: "1d37a991596b5d5fd22d27ad1bf5a69977c5a88c"
}, {
	name: "docstore",
	repo: "https://github.com/sharelatex/docstore-sharelatex.git",
	version: "be3b3e2b220010bffb17e7add23cec51d7dc9d63"
}, {
	name: "chat",
	repo: "https://github.com/sharelatex/chat-sharelatex.git",
	version: "c14a90d52672c1ab251183934edc312745f3396c"
}, {
	name: "tags",
	repo: "https://github.com/sharelatex/tags-sharelatex.git",
	version: "46d4ae810f9ca795764fe90e0b75603d166ccbf0"
}, {
	name: "spelling",
	repo: "https://github.com/sharelatex/spelling-sharelatex.git",
	version: "5fe85098527ef1f2cf297746ec4379013b044250"
}, {
	name: "contacts",
	repo: "https://github.com/sharelatex/contacts-sharelatex.git",
	//version: "3721589e450dbe04c968a67127cb21141710e013"
  // This one is even weirder (the ref disapperead but not equivalent has been found)
  version: "cf0ead897f5ac99670b2c93200a236f97023133f"
}, {
	name: "notifications",
	repo: "https://github.com/sharelatex/notifications-sharelatex.git",
	version: "fff86260ce2f71a5ceb1d672bb869d87b7c3beae"
}
]
