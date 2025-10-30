<script setup lang="ts">
import { h, cloneVNode, useSlots } from 'vue'

const props = withDefaults(defineProps<{
  variant?: 'default' | 'link' | 'ghost'
  asChild?: boolean
}>(), {
  variant: 'default',
  asChild: false
})

const slots = useSlots()

const common = "hover:cursor-pointer bg-bg"
const classes = {
  'default': "text-xl border-1 border-primary p-3 hover:bg-primary hover:!text-black",
  'link': "bg-secondary/30 before:content-['>_'] hover:bg-secondary",
  'ghost': "!text-secondary hover:!text-primary hover:underline"
}

// функция рендера — условно выбирает поведение
const render = () => {
  const children = slots.default?.()

  // если asChild = true и ровно 1 дочерний элемент
  if (props.asChild && children && children.length === 1) {
    const child = children[0]
    return cloneVNode(child, {
      class: [classes[props.variant], child.props?.class, common]
    })
  }

  // обычный случай — рендерим кнопку
  return h('button', { class: [classes[props.variant], common] }, children)
}
</script>

<template>
  <render />
</template>
