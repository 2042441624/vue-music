
<template>
    <div class="from_box">
        <h3>（网易）成有麟有限公司登录</h3>
        <form action="">
            <input type="text" placeholder="请输入手机号" v-model="formMess.phone">
            <input type="password" placeholder="请输入密码" v-model="formMess.act_pwd">

        </form>
        <div class="but" @click="onSubmit()">登录</div>
    </div>
</template>
   
<script>
import { cellphone } from "@/api/user";

export default {
    name: "v-login",
    data() {
        return {
            formMess: {
                "phone": "",
                "act_pwd": "",
            }
        };
    },
    methods: {
        onSubmit() {
            /* json格式提交： */
            // let formData = JSON.stringify(this.formMess);

            /* formData格式提交： */
            let formData = new FormData();
            for (var key in this.formMess) {
                formData.append(key, this.formMess[key]);
            }

            cellphone(this.formMess).then((res) => {
                if (res.code === 200) {
                    //设置跟踪user数据
                    this.$store.state.user.state = res;
                    // 设置cookieF
                    localStorage.setItem("cookie", res.cookie);
                    this.$router.push({ name: 'home'})
                    // console.log(this.$store.state.user.state);
                    // this.$refs.userImg.src = this.user.state.profile.avatarUrl;
                    // this.$refs.userName.innerText = this.user.state.profile.nickname;
                    // this.$refs.uservl.innerText = `关注${this.user.state.profile.follows} 粉丝${this.user.state.profile.followeds}`;
                }
            });
        }
    }
};
</script>
   
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.from_box {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    form {
        width: 90%;
        margin: auto;
        display: flex;
        flex-direction: column;


        input {
            width: 100%;
            height: 50px;
            margin-bottom: .2rem;
            border: .01rem solid black;
            margin: 0 auto;
        }
    }

    .but {
        font-size: .14rem;
        margin: 0 auto;
    }
}
</style>
