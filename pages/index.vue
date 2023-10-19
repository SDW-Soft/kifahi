<template>
  <div class="">
    <div class="h-screen w-4/5 m-auto">
      <div class="welcome_containe">
        <div class="mt-12 m-auto lg:w-8/12 sm:w-11/12 welcoming">
          <div
            class="texting flex gap-2 font-alex lg:text-5xl font-weight-bold sm:text-lg"
            dir="rtl"
          >
            <span class="text-success400">أنصر</span>
            <span>إخوانك و دافع عن</span>
            <div class="palestine lg:mr-4 sm:mr-1">
              <svg
                :class="{
                  'w-6 h-16': !$device.isMobile,
                  'w-6 h-8': $device.isMobile,
                }"
                viewBox="0 0 23 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_5_8901)">
                  <path
                    d="M-0.00225083 35.8535L0.226403 37.0659L2.19655 41.5379V42.4472L3.29462 45.0235V46.3875L4.54424 49.2297L5.18766 51.1999L5.67953 51.4285L5.41366 53.2843H6.40006V55.2545L7.61246 57.7192L7.34658 58.4397L8.33298 60.5242V61.4335L9.43105 64.0497L9.92292 65.6795L10.6435 66.5516L10.4148 68.9764L11.2098 70L11.9675 68.9764L12.4993 67.8012L12.7651 66.0198L13.0682 65.9055V64.39L13.9403 63.4036L13.5229 61.0905L14.2062 60.144L14.395 58.78L15.6446 57.6048L15.1527 56.3924V55.18C15.1527 55.18 15.7961 54.9913 15.6446 54.8769C15.493 54.7626 15.493 53.6645 15.493 53.6645L14.8257 51.9975L15.6685 50.5963L16.4023 48.0944L17.3116 47.2596L17.0085 46.2359L18.1837 44.4918L18.9042 42.5216L19.3961 40.7775L18.3725 38.5415L18.3353 37.026L19.1302 35.8508L18.9016 34.4496L18.6357 33.2745L18.9016 30.7726L19.6221 29.4086L20.0023 28.385L20.9116 28.0819V25.9602L20.7601 25.2024L20.6856 22.3602L20.9143 21.8285L21.1801 20.6533L21.4088 18.077L21.0286 16.5242L21.4088 15.6894V14.5913L20.9914 14.2111L21.0286 12.8844L21.6348 12.2011V10.5713L21.3317 9.88795L21.0658 8.63833L21.2945 7.72903L21.8634 7.54026V4.88681L22.6212 4.01474V2.38491L23.0014 1.13529V0H21.22V1.5155C21.22 1.5155 20.7654 2.99377 19.2127 3.44842C17.6599 3.90307 17.2053 3.56275 17.2053 3.56275L16.3332 3.59997L15.4611 3.63719L14.0201 3.86585L13.7542 4.88947L13.6771 6.59374L13.374 6.85962L13.2969 7.80614L11.9702 8.44956L11.4969 8.94143L10.9864 11.7837L11.1752 12.996L10.4919 14.134C10.4919 14.134 10.2632 16.5588 9.8086 17.8483C9.35395 19.1378 8.93652 20.5762 8.63342 21.6769C8.33032 22.775 8.40477 22.3203 7.64702 23.8757C6.88927 25.4284 6.54895 26.5292 6.43462 27.2497C6.3203 27.9702 2.15135 33.995 -0.00756836 35.8535H-0.00225083Z"
                    fill="#8492A7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_8901">
                    <rect
                      width="23.0036"
                      height="70"
                      fill="white"
                      transform="translate(-0.00195312)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span>رضك</span>
            <img
              :class="{ image: !$device.isMobile, imagesm: $device.isMobile }"
              class="mt-1 w-20 h-10"
              src="~/assets/images/flag.png"
              alt=""
            />
          </div>
        </div>
        <p
          class="text-center text-purple font-alex mt-4"
          :class="{ textsm: $device.isMobile }"
        >
          منصة لإنشاء هاشتاج واعادة صياغة المنشورات بطريقة لاتتبعها خوارزميات
          السوشل ميديا نصرة لإخواننا في فلسطين ودعم قضية المسلمين.
        </p>
      </div>
      <div class="hashtag mt-24 w-8/12 m-auto" v-if="!$device.isMobile">
        <div class="hashtag_container flex h-16 w-full p-2 bg-white">
          <div class="selection w-3/12">
            <select
              class="h-12 w-full text-center font-alex rounded font-medium"
              name=""
              id=""
              v-model="algo"
            >
              <option value="">مولد هاشتاج</option>
              <option value="1">بسيط</option>
              <option value="2">متوسط</option>
              <option value="3">عالي</option>
            </select>
          </div>
          <div class="text_editor w-5/12">
            <input
              class="w-full h-12 pr-2 font-alex"
              type="text"
              v-model="text"
              name=""
              id=""
              placeholder="أدخل كلمات الهاشتاج"
            />
          </div>
          <div class="calltoaction w-4/12">
            <button
              @click="hashString"
              class="cursor-pointer btn bg-success800 w-full h-12 font-alex rounded font-medium text-white"
            >
              # توليد مقترحات الهاشتاج
            </button>
          </div>
        </div>
      </div>
      <div class="hashtag mt-24 w-10/12 m-auto" v-else>
        <div class="hashtag_container grid h-auto w-full p-2 bg-white">
          <div class="selection w-full">
            <select
              class="h-12 w-full text-center font-alex rounded font-medium"
              name=""
              id=""
              v-model="algo"
            >
              <option value="">مولد هاشتاج</option>
              <option value="1">بسيط</option>
              <option value="2">متوسط</option>
              <option value="3">عالي</option>
            </select>
          </div>
          <div class="text_editor w-full">
            <textarea
              class="w-full h-24 pr-2 font-alex border-none"
              type="text"
              v-model="text"
              name=""
              id=""
              placeholder="أدخل كلمات الهاشتاج"
            ></textarea>
          </div>
          <div class="calltoaction w-full">
            <button
              @click="hashString"
              class="cursor-pointer btn bg-success800 w-full h-12 font-alex rounded font-medium text-white"
            >
              # توليد مقترحات الهاشتاج
            </button>
          </div>
        </div>
      </div>
      <div
        :class="{ statistics: $device.isMobile }"
        class="m-auto grid sm:gap-16 sm:grid-cols-1 lg:grid-cols-3 w-10/12 mt-24 lg:gap-x-4"
      >
        <div class="item">
          <div class="flex gap-4">
            <p class="font-inter text-xl text-gray-400">01</p>
            <p class="font-montserrat">أكثر هاشتاج يتم استعماله في المنصة</p>
          </div>
          <div class="flex gap-1 w-9/12 lg:float-left mt-4">
            <div
              class="w-8/12 h-6 bg-success900 text-white font-pop text-xs p-1 rounded-full"
            >
              #Stand_with_palestine
            </div>
            <div class="w-3/12 flex">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.42485 6V3C7.42485 2.44772 7.87257 2 8.42485 2H20.4248C20.9771 2 21.4248 2.44772 21.4248 3V17C21.4248 17.5523 20.9771 18 20.4248 18H17.4248V20.9991C17.4248 21.5519 16.9749 22 16.418 22H4.43171C3.87564 22 3.42505 21.5554 3.42505 20.9991L3.42765 7.00087C3.42775 6.44811 3.87769 6 4.43447 6H7.42485ZM9.42485 6H17.4248V16H19.4248V4H9.42485V6Z"
                  fill="#556271"
                />
              </svg>
              <p class="font-montserrat font-weight-light">نسخ</p>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="flex gap-4">
            <p class="font-inter text-xl text-gray-400">02</p>
            <p class="font-montserrat">
              عدد المنشورات التي تمت معالجتها عبر المنصة
            </p>
          </div>
          <div class="flex gap-1 w-9/12 lg:float-left mt-4">
            <div
              class="w-3/12 h-6 bg-gray-500 text-white font-pop text-xs p-1 rounded-full"
            >
              {{ actionCount }} منشور
            </div>
            <div class="w-3/12 flex">
              <p class="font-montserrat font-weight-light text-gray-500">
                #دافع_عن_ارضك
              </p>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="flex gap-4">
            <p class="font-inter text-xl text-gray-400">03</p>
            <p class="font-montserrat">
              عدد الزوار الحاليين الذين يستعملون المنصة
            </p>
          </div>
          <div class="flex gap-1 w-9/12 lg:float-left mt-4">
            <div
              class="w-3/12 h-6 bg-gray-500 text-white font-pop text-xs p-1 rounded-full"
            >
              {{ visitorCount }} زائر
            </div>
            <div class="w-6/12 flex">
              <p class="font-montserrat font-weight-light text-gray-500">
                شارك المنصة
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="results w-full mt-16 bg-white rounded h-52 min-h-52 relative px-2"
      >
        <div class="lg:w-3/12 text-center sm:w-6/12 ml-auto mr-auto mt-12">
          <p class="font-alex text-md text-black800">ستظهر نتائج العملية هنا</p>
        </div>
        <div class="h-36 min-h-36">
          <article
            style="font-family: 'Times New Roman', serif"
            class="font-semibold"
            v-html="converted"
          ></article>
        </div>
        <div
          class="h-8 text-center w-full rounded-md bg-black500 text-white text-alex flex gap-2"
        >
          <div
            class="lg:w-2/12 sm:w-6/12 m-auto flex cursor-pointer"
            @click="copyToClipboard(converted)"
          >
            <p class="text-center">نسخ النتائج كاملا</p>
            <svg
              class="mt-1 mr-2"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.16653 4.49992V2.49992C5.16653 2.13173 5.46501 1.83325 5.8332 1.83325H13.8332C14.2014 1.83325 14.4999 2.13173 14.4999 2.49992V11.8333C14.4999 12.2015 14.2014 12.4999 13.8332 12.4999H11.8332V14.4993C11.8332 14.8679 11.5333 15.1666 11.162 15.1666H3.17111C2.80039 15.1666 2.5 14.8702 2.5 14.4993L2.50173 5.16717C2.5018 4.79866 2.80176 4.49992 3.17295 4.49992H5.16653ZM6.49987 4.49992H11.8332V11.1666H13.1665V3.16659H6.49987V4.49992Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <p class="text-center font-alex text-xl mt-4">#لاتحزن_أنت_في_حرب</p>
    </div>
  </div>
</template>
<script>
import { hashTextToUser } from "~/plugins/hash.js";
import axios from "axios";
export default {
  name: "admins",
  layout: "adminLte",
  metaInfo() {
    return {
      script: [
        {
          src: "https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js",
          defer: true,
          body: true,
          callback: this.onScriptLoaded,
        },
        {
          src: "https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js",
          body: true,
          skip: !this.externalLoaded,
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    };
  },
  data() {
    return {
      load: true,
      algo: 1,
      visitorCount: 0,
      actionCount: 0,
      text: null,
      converted: null,
    };
  },
  async mounted() {
    if (!process.client) return;
    try {
      const response = await axios.get(
        "http://localhost:3001/api/visitor-count"
      );
      this.visitorCount = response.data.count;
    } catch (error) {
      this.visitorCount = 0;
    }
  },
  methods: {
    async hashString() {
      if (this.text != null) {
        this.converted = hashTextToUser(this.algo, this.text);
        if (this.converted.length > 0) {
          this.converted += " #دافع_عن_ارضك ";
          try {
            const response = await axios.get(
              "http://localhost:3001/api/action-count"
            );
            this.actionCount = response.data.count;
          } catch (error) {
            this.actionCount = 0;
          }
        }
      }
    },
    copyToClipboard(text) {
      // Create a temporary input element
      const tempInput = document.createElement("input");
      tempInput.value = text;
      document.body.appendChild(tempInput);

      // Select the text in the temporary input element
      tempInput.select();
      tempInput.setSelectionRange(0, 99999); // For mobile devices

      // Execute the copy command
      document.execCommand("copy");

      // Remove the temporary input element
      document.body.removeChild(tempInput);

      // Provide user feedback (you can use alerts, tooltips, etc.)
      this.$toast.success("تم حفظ النص").goAway(2000);
    },
  },
};
</script>
<style scoped>
.statistics {
  gap: 3em;
}
.image {
  width: 80px;
  height: 39.5px;
  flex-shrink: 0;
  border-radius: 8px;
}
.imagesm {
  width: 40px;
  height: 20px;
}
.font-montserrat {
  font-family: Montserrat;
}
.textsm {
  font-size: 12px !important;
}
</style>
