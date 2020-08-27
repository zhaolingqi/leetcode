/**
 * 设计一个简化版的推特(Twitter)，可以让用户实现发送推文，关注/取消关注其他用户，能够看见关注人（包括自己）的最近十条推文。你的设计需要支持以下的几个功能：

postTweet(userId, tweetId): 创建一条新的推文
getNewsFeed(userId): 检索最近的十条推文。每个推文都必须是由此用户关注的人或者是用户自己发出的。推文必须按照时间顺序由最近的开始排序。
follow(followerId, followeeId): 关注一个用户
unfollow(followerId, followeeId): 取消关注一个用户
=
 */
/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.user = new Map()
    this.follower = new Map()
    this.time = 0
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    let time = this.time
    let temp = {
        tweetId,
        time
    }
    if(this.user.has(userId)) {
        let tempArr = this.user.get(userId)
        tempArr.push(temp)
        this.user.set(userId, tempArr)
    } else {
        let tempArr = []
        tempArr.push(temp)
        this.user.set(userId, tempArr)
    }
    this.time += 1

};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let resNews = []
    // 讲自己的推文放入数组中
    if(this.user.has(userId)) resNews = resNews.concat(this.user.get(userId))
    // 讲关注者的推文放入数组
    if(this.follower.has(userId)) {
        let setIter = this.follower.get(userId).values()
        let temp = setIter.next()
        while(!temp.done) {
            let followeeId = temp.value
            if(this.user.has(followeeId)) {
                resNews = resNews.concat(this.user.get(followeeId))
            }
            temp = setIter.next()
        }
    }
    resNews.sort((a, b) => {
        return b.time - a.time
    })
    // 取resNews中的前十个元素中的tweet值
    let length = resNews.length
    length = length < 10 ? length : 10
    let res = []
    for(let i = 0; i < length; i++) {
        res[i] = resNews[i].tweetId
    }
    return res
    
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(followeeId === followerId) return
    if(!this.follower.has(followerId)) {
        let temp = new Set()
        temp.add(followeeId)
        this.follower.set(followerId, temp)
    } else {
        let temp = this.follower.get(followerId)
        if(!temp.has(followeeId)) {
            temp.add(followeeId)
            this.follower.set(followerId, temp)
        }
    }
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(this.follower.has(followerId)) {
        let temp = this.follower.get(followerId)
        if(temp.has(followeeId)) {
            temp.delete(followeeId)
            this.follower.set(followerId, temp)
        }
    }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
var obj = new Twitter()
// obj.postTweet(1, 5)
// var param_2 = obj.getNewsFeed(1)
// console.log(param_2)
// obj.follow(1,2)
// obj.postTweet(2, 6)
// var param_3 = obj.getNewsFeed(1)
// console.log(param_3)
// obj.unfollow(1, 2)
// console.log(obj.getNewsFeed(1))
obj.follow(1,5)
obj.getNewsFeed(1)