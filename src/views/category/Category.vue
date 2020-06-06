<template>
  <div class="wrapper">
    <ul class="content">
      <button @click="btnClick">点击</button>
      <li>分类列别1</li>
      <li>分类列别2</li>
      <li>分类列别3</li>
      <li>分类列别4</li>
      <li>分类列别5</li>
      <li>分类列别6</li>
      <li>分类列别7</li>
      <li>分类列别8</li>
      <li>分类列别9</li>
      <li>分类列别10</li>
      <li>分类列别11</li>
      <li>分类列别12</li>
      <li>分类列别13</li>
      <li>分类列别14</li>
      <li>分类列别15</li>
      <li>分类列别16</li>
      <li>分类列别17</li>
      <li>分类列别18</li>
      <li>分类列别19</li>
      <li>分类列别20</li>
      <li>分类列别21</li>
      <li>分类列别22</li>
      <li>分类列别23</li>
      <li>分类列别24</li>
      <li>分类列别25</li>
      <li>分类列别26</li>
      <li>分类列别27</li>
      <li>分类列别28</li>
      <li>分类列别29</li>
      <li>分类列别30</li>
      <li>分类列别31</li>
      <li>分类列别32</li>
      <li>分类列别33</li>
      <li>分类列别34</li>
      <li>分类列别35</li>
      <li>分类列别36</li>
      <li>分类列别37</li>
      <li>分类列别38</li>
      <li>分类列别39</li>
      <li>分类列别40</li>
      <li>分类列别41</li>
      <li>分类列别42</li>
      <li>分类列别43</li>
      <li>分类列别44</li>
      <li>分类列别45</li>
      <li>分类列别46</li>
      <li>分类列别47</li>
      <li>分类列别48</li>
      <li>分类列别49</li>
      <li>分类列别50</li>
      <li>分类列别51</li>
      <li>分类列别52</li>
      <li>分类列别53</li>
      <li>分类列别54</li>
      <li>分类列别55</li>
      <li>分类列别56</li>
      <li>分类列别57</li>
      <li>分类列别58</li>
      <li>分类列别59</li>
      <li>分类列别60</li>
      <li>分类列别61</li>
      <li>分类列别62</li>
      <li>分类列别63</li>
      <li>分类列别64</li>
      <li>分类列别65</li>
      <li>分类列别66</li>
      <li>分类列别67</li>
      <li>分类列别68</li>
      <li>分类列别69</li>
      <li>分类列别70</li>
      <li>分类列别71</li>
      <li>分类列别72</li>
      <li>分类列别73</li>
      <li>分类列别74</li>
      <li>分类列别75</li>
      <li>分类列别76</li>
      <li>分类列别77</li>
      <li>分类列别78</li>
      <li>分类列别79</li>
      <li>分类列别80</li>
      <li>分类列别81</li>
      <li>分类列别82</li>
      <li>分类列别83</li>
      <li>分类列别84</li>
      <li>分类列别85</li>
      <li>分类列别86</li>
      <li>分类列别87</li>
      <li>分类列别88</li>
      <li>分类列别89</li>
      <li>分类列别90</li>
      <li>分类列别91</li>
      <li>分类列别92</li>
      <li>分类列别93</li>
      <li>分类列别94</li>
      <li>分类列别95</li>
      <li>分类列别96</li>
      <li>分类列别97</li>
      <li>分类列别98</li>
      <li>分类列别99</li>
      <li>分类列别100</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Category",
    data(){
      return {
        scroll:null
      }
    },
    methods:{
      btnClick(){
        console.log('btnClick')
      }
    },
    mounted(){
        this.scroll=new BScroll(document.querySelector('.wrapper'),{
          probeType:3,
          pullUpLoad:true
        })
      // this.scroll.on('scroll',(position)=>{
      //   console.log(position)
      // })
      this.scroll.on('pullingUp',()=>{
        console.log('上拉加载更多')
      })
    }
  }
</script>

<style scoped>
  .wrapper{
    height:150px;
    background-color:red;
    overflow: hidden;
    /*overflow: scroll;*/
  }
</style>
