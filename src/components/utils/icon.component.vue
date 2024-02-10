<template>
  <component :is="props.name" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Document from '../../assets/icons/document.svg?component';
import Setting from '../../assets/icons/setting.svg?component';
import Profile2Use from '../../assets/icons/profile-2user.svg?component';
import Cup from '../../assets/icons/cup.svg?component';
import Calendar from '../../assets/icons/calendar.svg?component';
import People from '../../assets/icons/people.svg?component';
import Gallery from '../../assets/icons/gallery.svg?component';
import VideoSquare from '../../assets/icons/videoSquare.svg?component';
import ScreenMirroring from '../../assets/icons/screenmirroring.svg?component';
import Flash from '../../assets/icons/flash.svg?component';
import Dots from '../../assets/icons/dots.svg?component';
import ArrowRight from '../../assets/icons/arrow-right.svg?component';
import Arrow from '../../assets/icons/Arrow.svg?component';
import Search from '../../assets/icons/search.svg?component';
import Edit from '../../assets/icons/edit.svg?component';
import Trash from '../../assets/icons/trash.svg?component';
import Plus2 from '../../assets/icons/plus2.svg?component';
import Plue from '../../assets/icons/Plue.svg?component';
import Close from '../../assets/icons/close.svg?component';
import arrowDown from '../../assets/icons/arrowDown.svg?component';

export default defineComponent({
  components: {
    Document,
    Setting,
    Profile2Use,
    Cup,
    Calendar,
    People,
    Gallery,
    VideoSquare,
    ScreenMirroring,
    Flash,
    Dots,
    ArrowRight,
    Arrow,
    Search,
    Edit,
    Trash,
    Plus2,
    Close,
    arrowDown,
    Plue,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>
