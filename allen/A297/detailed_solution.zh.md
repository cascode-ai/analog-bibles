# 详细步骤 - A297

第二级是普通共源级，其增益和输出电阻可直接写出。第一级需要仔细分析：M8 的栅极（节点 A，即 M6 漏极和 M4 源极）不是高阻节点，因为从这里看进去的是共源共栅管 M4 的源极。高阻节点是 M4 的漏极（节点 B），它只驱动 $C_c$。先求节点 B 上的大摆幅，再求它在节点 A 产生的小得多的电压。取 $v_{in}=v_+-v_-$（+ 输入在 M2），尾电流源为理想，所有器件饱和，且 $g_{ds}\ll g_m$。

### 第 1 步 — 第二级与输出电阻

M8 是以电流沉 M9 为负载的共源级，输出节点看到 $r_{ds8}\parallel r_{ds9}$：

$$
R_{out}=\frac1{g_{ds8}+g_{ds9}},\qquad v_{out}=-\frac{g_{m8}}{g_{ds8}+g_{ds9}}\,v_A .
$$

### 第 2 步 — 节点 A 为何是低阻

从 M8 栅极看节点 A，是 M6 的漏极（$r_{ds6}$）与共源共栅管 M4 的源极并联，而 M4 的漏极只接电流源 M2（$\approx r_{ds2}$）。共源共栅管的源极电阻为

$$
R_A\approx\frac{r_{ds4}+r_{ds2}}{1+g_{m4}r_{ds4}}\sim\frac1{g_{m4}}\ll r_{ds6},
$$

因此流入节点 A 的信号电流只在该处产生很小的电压。

### 第 3 步 — 信号电流与节点 B 的摆幅

尾电流源理想时 $i_{d1}=-i_{d2}$。M1 的电流经 M3 流入二极管 M5，由 M6 复制，因此 M6 向节点 A 提供约 $i_{d1}=-i_{d2}$。节点 A 的 KCL（M8 栅极不取电流）要求 M4 流过这一电流，而节点 B 的 KCL 要求 M4 流过 $i_{d2}$。两者同时成立，只能在一阶近似下差分对的信号电流为零：

$$
i_{d1}\approx i_{d2}\approx0 .
$$

于是节点 D1 和 M5 栅极几乎不动，公共源极跟随 M1 的栅极（$v_S\approx-v_{in}/2$），M2 看到 $v_{gs2}\approx v_{in}$。只有其漏极（节点 B）产生大摆幅，才能使其漏极电流保持近似为零：

$$
g_{m2}v_{in}+g_{ds2}v_B\approx0\;\Rightarrow\;v_B\approx-\frac{g_{m1}}{g_{ds2}}\,v_{in}\qquad(g_{m2}=g_{m1}).
$$

### 第 4 步 — 节点 A 的电压与总增益

M4 同样几乎不流过信号电流，$g_{m4}v_A+g_{ds4}(v_A-v_B)\approx0$，因此 B 点的摆幅被 M4 的本征增益除后传到 A 点：

$$
v_A\approx\frac{g_{ds4}}{g_{m4}}v_B=-\frac{g_{m1}}{g_{m4}}\cdot\frac{g_{ds4}}{g_{ds2}}\,v_{in} .
$$

与第 1 步合并：

$$
\frac{v_{out}}{v_{in}}\approx\frac{g_{m1}}{g_{m4}}\cdot\frac{r_{ds2}}{r_{ds4}}\cdot\frac{g_{m8}}{g_{ds8}+g_{ds9}},
$$

增益为正。完整节点方程的数值解与这一主项一致（例如所有 $g_m$ 相等、所有 $g_{ds}=0.01g_m$ 时，$v_A/v_{in}$ 为 $-0.97$，主项为 $-1$）。若改把尾电流节点视为交流地，第一级因子只相差一个量级为 1 的系数。

### 第 5 步 — 设计参数形式

M1、M2、M4 流过 $I_7/2$，$g_{m1}=\sqrt{K'_NS_1I_7}$，$g_{m4}=\sqrt{K'_PS_4I_7}$，$r_{ds2}/r_{ds4}=\lambda_P/\lambda_N$，$g_{m8}=\sqrt{2K'_PS_8I_9}$，$g_{ds8}+g_{ds9}=(\lambda_N+\lambda_P)I_9$：

$$
\frac{v_{out}}{v_{in}}\approx\frac{\lambda_P}{\lambda_N}\cdot\frac{\sqrt{2K'_NS_1S_8/(S_4I_9)}}{\lambda_N+\lambda_P} .
$$

第一级只贡献 $g_{m1}/g_{m4}$ 量级（几倍）的增益，因此按图中连接，电路的总增益约为 $10^2$ 量级，而不是 $(g_mr_{ds})^2$。
