# 详细步骤 - grsim-04-18

把输出对小信号短路，施加纯差模输入，并令 $r_o\to\infty$（包括尾电流源）。此时尾节点稳定在使两个输入管电流相互抵消的位置，由此得到 $g_m$ 失配时差分对的跨导。电流镜再以增益 $g_{m4}/g_{m3}$ 把 $T_1$ 的电流送到输出。把结果用平均值和差值改写，即得所求公式。最后用包含全部 $r_o$ 的线性小信号仿真精确验证。

### 第 1 步 — $g_m$ 失配的输入对

施加 $v_{i1}=v_{id}/2$、$v_{i2}=-v_{id}/2$，记尾节点电压为 $v_t$。$r_{o5}\to\infty$ 时没有小信号电流离开尾节点，因此两个漏极电流大小相等、方向相反：

$$
i_1=g_{m1}(v_{i1}-v_t),\qquad i_2=g_{m2}(v_{i2}-v_t),\qquad i_1+i_2=0
\;\Rightarrow\;
v_t=\frac{g_{m1}v_{i1}+g_{m2}v_{i2}}{g_{m1}+g_{m2}} .
$$

代回得

$$
i_1=-i_2=\frac{g_{m1}g_{m2}}{g_{m1}+g_{m2}}\,v_{id}.
$$

存在失配时尾节点不再是交流地：它向较强器件的栅极方向移动（此处 $v_t=0.025v_{id}$）。

### 第 2 步 — 电流镜与输出电流

$T_1$ 从二极管连接的 $T_3$ 吸取 $i_1$，其栅压变为 $v_3=-i_1/g_{m3}$。$T_4$ 向输出提供 $g_{m4}(-v_3)=(g_{m4}/g_{m3})\,i_1$，而 $T_2$ 从输出吸取 $i_2=-i_1$。送入短路线的电流为

$$
i_{out}=\frac{g_{m4}}{g_{m3}}i_1-i_2=i_1\left(1+\frac{g_{m4}}{g_{m3}}\right),
\qquad
G_m[dm]=\frac{i_{out}}{v_{id}}=\frac{g_{m1}g_{m2}}{g_{m1}+g_{m2}}\cdot\frac{g_{m3}+g_{m4}}{g_{m3}} .
$$

### 第 3 步 — 平均值与差值形式

令 $g_{m1,2}=g_{m1-2}\pm\Delta g_{m1-2}/2$、$g_{m3,4}=g_{m3-4}\pm\Delta g_{m3-4}/2$：

$$
\frac{g_{m1}g_{m2}}{g_{m1}+g_{m2}}=\frac{g_{m1-2}^2-\Delta g_{m1-2}^2/4}{2g_{m1-2}}=\frac{g_{m1-2}}2\left[1-\left(\frac{\Delta g_{m1-2}}{2g_{m1-2}}\right)^2\right],
\qquad
\frac{g_{m3}+g_{m4}}{g_{m3}}=\frac{2}{1+\dfrac{\Delta g_{m3-4}}{2g_{m3-4}}} .
$$

相乘得

$$
G_m[dm]=g_{m1-2}\,\frac{1-\left(\dfrac{\Delta g_{m1-2}}{2g_{m1-2}}\right)^2}{1+\dfrac{\Delta g_{m3-4}}{2g_{m3-4}}},
$$

当所有 $r_o\to\infty$ 时该式精确成立，否则为近似式。输入对的失配只以二阶形式出现，因为尾节点会自行调整，使两路电流相等。电流镜的失配则以一阶形式出现，因为它直接按比例改变经过电流镜的那一半信号。

### 第 4 步 — 数值

由表，$g_{m1-2}=1.0$ mA/V，$\Delta g_{m1-2}=0.1$ mA/V，$g_{m3-4}=1.0$ mA/V，$\Delta g_{m3-4}=0.2$ mA/V：

$$
G_m[dm]=(1.0\ \mathrm{mA/V})\,\frac{1-(0.05)^2}{1+0.1}=\frac{0.9975}{1.1}\ \mathrm{mA/V}=0.907\ \mathrm{mA/V}.
$$

没有失配时 $G_m[dm]=g_m=1.0$ mA/V。失配使 $G_m[dm]$ 降低约 9%，其中只有 0.25% 来自输入对。

### 第 5 步 — SPICE 验证（线性小信号模型）

每个晶体管都用其小信号模型代替：漏极到源极的压控电流源（VCCS）$g_m v_{gs}$ 并联 $r_o$。二极管连接的 $T_3$ 是受其自身漏极电压控制的 VCCS，$T_4$ 受 $v_3$ 控制，尾电流管 $T_5$ 只是 $r_{o5}=0.5$ MΩ。输出由一个 0 V 电压源短路，其电流即为 $i_{out}$。

```spice
* grsim-04-18 small-signal model of the mirror-loaded pair (DM input)
V1  g1 0 0.5
V2  g2 0 -0.5
G1  d1 t g1 t 1.05m
RO1 d1 t 0.95meg
G2  out t g2 t 0.95m
RO2 out t 1.05meg
G3  d1 0 d1 0 1.1m
RO3 d1 0 1meg
G4  out 0 d1 0 0.9m
RO4 out 0 1meg
RO5 t 0 0.5meg
VSH out 0 0
.control
op
print i(VSH) v(t) v(d1)
.endc
.end
```

| 情况 | 公式（$r_o\to\infty$） | ngspice（计入全部 $r_o$） |
|---|---|---|
| 有失配 | 0.907 mA/V | 0.906 mA/V |
| 无失配（所有 $g_m=1$ mA/V，$r_o=1$ MΩ） | 1.000 mA/V | 0.999 mA/V |

仿真还显示尾节点移动 $0.025\,v_{id}$，与第 1 步的预测一致。有限输出电阻只使 $G_m[dm]$ 改变约 0.1%，所以近似公式是准确的。失配使 $G_m[dm]$ 降低 9%，几乎全部来自 $g_{m3}\ne g_{m4}$。
