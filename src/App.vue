<script setup>
import mustache from "./components/day7/Mustache.vue";
import vHtml from "./components/day7/vHtml.vue";
import vBind from "./components/day8/vBind.vue";
import expression from "./components/day9/expression.vue";
import method from "./components/day9/method.vue";
import directives from "./components/day10/directives.vue";
import ref from "./components/day11/ref.vue";
import refObj from "./components/day12/refObj.vue";
import refObj2 from "./components/day12/refObj2.vue";
import reactive from "./components/day14/reactive.vue";
import reactiveProxy from "./components/day14/reactiveProxy.vue";
import reactiveBestPractice from "./components/day14/reactiveBestPractice.vue";
import reactiveObjReturn from "./components/day14/reactiveObjReturn.vue";
import reactiveCannot from "./components/day14/reactiveCannot1.vue";
import reactiveCannot2 from "./components/day14/reactiveCannot2.vue";
import reactiveCannot3 from "./components/day14/reactiveCannot3.vue";
import refUnwrapByReactive from "./components/day15/refUnwrapByReactive.vue";
import refUnwrapByReactive2 from "./components/day15/refUnwrapByReactive2.vue";
import refArrayUnwrap from "./components/day15/refArrayUnwrap.vue";
import refTemplateUnwrap from "./components/day15/refTemplateUnwrap.vue";
import noComputed from "./components/day16/noComputed.vue";
import computed from "./components/day16/computed.vue";
import functionVScomputed from "./components/day16/functionVScomputed.vue";
import DateNow from "./components/day16/DateNow.vue";
import computedChangeValue from "./components/day16/computedChangeValue.vue";
import classVbind from "./components/day17/classVbind.vue";
import classVbind2 from "./components/day17/classVbind2.vue";
import classVbind3 from "./components/day17/classVbind3.vue";
import classVbind4 from "./components/day17/classVbind4.vue";
import classVbind5 from "./components/day17/classVbind5.vue";
import classVbind6 from "./components/day17/classVbind6.vue";
import styleVbind from "./components/day18/styleVbind2.vue";
import styleVbind2 from "./components/day18/styleVbind2.vue";
import styleVbind3 from "./components/day18/styleVbind3.vue";
import vIf from "./components/day19/vIf.vue";
import vIf2 from "./components/day19/vIf2.vue";
import vIf3 from "./components/day19/vIf3.vue";
import vShow from "./components/day19/vShow.vue";
import vFor from "./components/day20/vFor.vue";
import vFor2 from "./components/day20/vFor2.vue";
import vFor3 from "./components/day20/vFor3.vue";
import vFor4 from "./components/day20/vFor4.vue";
import vFor5 from "./components/day20/vFor5.vue";
import vFor6 from "./components/day20/vFor6.vue";
import vFor7 from "./components/day20/vFor7.vue";
import vFor8 from "./components/day20/vFor8.vue";
import vFor9 from "./components/day20/vFor9.vue";
import vFor9keyIndex from "./components/day21/vFor9keyIndex.vue";
import vFor9keyId from "./components/day21/vFor9keyId.vue";
import vFor10 from "./components/day21/vFor10.vue";
import vFor11 from "./components/day21/vFor11.vue";
import vFor12 from "./components/day21/vFor12.vue";
import vFor13 from "./components/day21/vFor13.vue";
import vOnInline from "./components/day22/vOnInline.vue";
import vOnInline2 from "./components/day22/vOnInline2.vue";
import vOnInline2DOM from "./components/day22/vOnInline2DOM.vue";
import vOnMethod from "./components/day22/vOnMethod.vue";
import vOnPrevent from "./components/day22/vOnPrevent.vue";
import vOnKeydown from "./components/day22/vOnKeydown.vue";
import vOnKeyup from "./components/day22/vOnKeyup.vue";
import vBindInput from "./components/day23/vBindInput.vue";
import vBindCheckbox from "./components/day23/vBindCheckbox.vue";
import vBindTextarea from "./components/day23/vBindTextarea.vue";
import vBindRadio from "./components/day23/vBindRadio.vue";
import vBindSelect from "./components/day23/vBindSelect.vue";
import vBindCheckboxCustomValue from "./components/day23/vBindCheckboxCustomValue.vue";
import vBindRadioCustomValue from "./components/day23/vBindRadioCustomValue.vue";
import vBindSelectCustomValue from "./components/day23/vBindSelectCustomValue.vue";
import mount from "./components/day24/mount.vue";
import update from "./components/day24/update.vue";
import unmount from "./components/day24/unmount.vue";
import ComponentA from "./components/day24/componentA.vue";
</script>

<template>
  <main>
    <h2>Day7</h2>
    <mustache />
    <vHtml rawHtml="<strong>This is where I can put the HTML code</strong>" />
    <h2>Day8</h2>
    <vBind />
    <h2>Day9</h2>
    <expression />
    <method />
    <h2>Day10</h2>
    <directives />
    <h2>Day11</h2>
    <ref />
    <h2>Day12</h2>
    <refObj />
    <refObj2 />
    <h2>Day14</h2>
    <reactive />
    <reactiveProxy />
    <reactiveBestPractice />
    <reactiveObjReturn />
    <reactiveCannot />
    <reactiveCannot2 />
    <reactiveCannot3 />
    <h2>Day15</h2>
    <refUnwrapByReactive />
    <refUnwrapByReactive2 />
    <refArrayUnwrap />
    <refTemplateUnwrap />
    <h2>Day16</h2>
    <noComputed />
    <computed />
    <functionVScomputed />
    <DateNow />
    <computedChangeValue />
    <h2>Day17</h2>
    <classVbind />
    <classVbind2 />
    <classVbind3 />
    <classVbind4 />
    <classVbind5 />
    <classVbind6 />
    <h2>Day18</h2>
    <styleVbind />
    <styleVbind2 />
    <styleVbind3 />
    <h2>Day19</h2>
    <vIf />
    <vIf2 />
    <br />
    <br />
    <vIf3 />
    <vShow />
    <h2>Day20</h2>
    <vFor />
    <vFor2 />
    <vFor3 />
    <vFor4 />
    <vFor5 />
    <vFor6 />
    <vFor7 />
    <vFor8 />
    <vFor9 />
    <h2>Day21</h2>
    <vFor9keyIndex />
    <vFor9keyId />
    <vFor10 />
    <vFor11 />
    <vFor12 />
    <vFor13 />
    <h2>Day22</h2>
    <vOnInline />
    <vOnInline2 />
    <vOnInline2DOM />
    <vOnMethod />
    <vOnPrevent />
    <vOnKeydown />
    <vOnKeyup />
    <h2>Day23</h2>
    <vBindInput />
    <vBindTextarea />
    <vBindCheckbox />
    <vBindRadio />
    <vBindSelect />
    <vBindCheckboxCustomValue />
    <vBindRadioCustomValue />
    <vBindSelectCustomValue />
    <h2>Day24</h2>
    <mount />
    <update />
    <br />
    <unmount />
    <ComponentA />
  </main>
</template>
