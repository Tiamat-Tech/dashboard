<template>
  <main>
    <b-row class="content-header">
      <b-col sm="2">
        Author Rewards
      </b-col>
      <b-col sm="1">
        Upvotes
      </b-col>
    </b-row>
    <hr/>
    <div v-for="(news, index) in newsData" :key="index" class="news-list">
    <b-row>
      <b-col sm="2" class="author-reward">
        {{ news.reward }}
      </b-col>
      <b-col sm="1" class="upvotes">
        {{ news.upvotes }}
      </b-col>
      <b-col sm="9" class="content-desc">
        <a :href="news.link" target="_blank" class="content-link">{{ news.content }}</a>
        <span class="link">({{ news.link }})</span>
      </b-col>
    </b-row>
    <div v-if="isDifferentDays(index, index+1)" class="date">
      <b-badge class="date-tag">{{ toDateTag(index+1) }}</b-badge>
      <hr class="date-tag-line">
    </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from "vue-property-decorator"
import dummyNewsData from "@/data/dummyNewsData.json"

@Component
export default class NewsPage extends Vue {

  newsData = dummyNewsData

  isDifferentDays(now, next) {
    if (!this.newsData[next]) {
      return false
    }

    const nowTime = new Date(this.newsData[now].timestamp * 1000)
    const nextTime = new Date(this.newsData[next].timestamp * 1000)

    return nowTime.getUTCDate() !== nextTime.getUTCDate()
  }

  toDateTag(index) {
    if (!this.newsData[index]) {
      return
    }

    const dateTag = new Date(this.newsData[index].timestamp * 1000)
    return dateTag.toUTCString().substring(0, 12)
  }
}
</script>

<style lang="scss">

  .news-list {
    padding: 8px 0;
  }

  .content-header {
    margin-top: 16px;
    text-align: center;
    font-weight: 600;
  }

  .content-link {
    color: #212529
  }

  .author-reward {
    text-align: right;
    padding-right: 3%;
    letter-spacing: 0.3px;
  }

  .upvotes {
    text-align: left;
    color: rgb(250, 112, 7);
    letter-spacing: 1px;
    padding-left: 3%;
  }

  .link {
    font-size: 10px;
    color: gray;
    margin-left: 4px;
  }

  .date {
    margin-top: 2%;
    text-align: center;
  }

  .date-tag {
    	padding: 0.55em 0.5em 0.75em;
	    font-size: 95%;
	    font-weight: 500;
      background-color: rgb(250, 112, 7);
      margin-bottom: -3%;
  }

  .date-tag-line {
    margin-block-start: 0;
    margin-top: 0;
    border-top: 1px solid rgb(250, 112, 7);
  }
  

</style>