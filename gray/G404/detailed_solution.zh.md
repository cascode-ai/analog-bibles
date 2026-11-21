# 详细步骤 - G404

在 $V_{ds}$ 固定的条件下对线性区平方律求关于 $V_{gs}$ 的导数。为了在相同电流下与饱和区比较，把两个跨导都用 $I_D$ 表示并求其比值。记 $V_{ov}=V_{gs}-V_t$；线性区要求 $0<V_{ds}<V_{ov}$。

### 第 1 步 — 线性区跨导

由 $I_d=k'(W/L)\left[(V_{gs}-V_t)V_{ds}-V_{ds}^2/2\right]$，只有第一项与 $V_{gs}$ 有关：

$$
g_{m,\mathrm{triode}}=\frac{\partial I_d}{\partial V_{gs}}\bigg|_{V_{ds}}=k'\frac WL V_{ds}.
$$

利用偏置电流 $I_D=k'(W/L)(V_{ov}-V_{ds}/2)V_{ds}$，它也可以写成

$$
g_{m,\mathrm{triode}}=\frac{I_D}{V_{ov}-V_{ds}/2}.
$$

线性区的 $g_m$ 由 $V_{ds}$ 决定，而不是由过驱动电压决定：栅极控制沟道电荷，而这些电荷所承载的电流与漏源电压成正比。

### 第 2 步 — 相同电流下的饱和区跨导

在有源区（饱和区）$I_D=\tfrac12k'(W/L)V_{ov,\mathrm{sat}}^2$，且

$$
g_{m,\mathrm{sat}}=k'\frac WL V_{ov,\mathrm{sat}}=\sqrt{2k'\frac WL I_D}.
$$

### 第 3 步 — 相同 $I_D$ 下的比值

把线性区的 $I_D$ 代入 $g_{m,\mathrm{sat}}$（同一器件、同一电流）：

$$
\frac{g_{m,\mathrm{triode}}}{g_{m,\mathrm{sat}}}
=\frac{k'(W/L)V_{ds}}{\sqrt{2\left[k'(W/L)\right]^2(V_{ov}-V_{ds}/2)V_{ds}}}
=\sqrt{\frac{V_{ds}}{2V_{ov}-V_{ds}}}.
$$

线性区中 $V_{ds}<V_{ov}$，故 $V_{ds}<2V_{ov}-V_{ds}$，比值小于 1。只有在饱和边缘（$V_{ds}=V_{ov}$，两个模型在此衔接）比值才达到 1；当 $V_{ds}\to0$（进入深线性区，deep triode region）时比值趋于零。

### 第 4 步 — 结论

在相同的直流漏极电流下，有源区的晶体管跨导更大；线性区的 $g_m=k'(W/L)V_{ds}$ 只有饱和区的 $\sqrt{V_{ds}/(2V_{ov}-V_{ds})}$ 倍。这就是用线性区晶体管检测输出共模电平的共模反馈（CMFB）电路，在给定电流下环路增益和带宽较低的原因。
