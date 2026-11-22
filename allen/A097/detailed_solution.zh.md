# 详细步骤 - A097

两个晶体管都是二极管连接，因而都饱和，且流过相同的电流。令二者的平方律电流相等，解出 $V_{REF}$ 作为 $V_{DD}$ 的线性函数，求导，再构成归一化灵敏度。

### 第 1 步 — 电流相等

M1 的 $V_{GS1}=V_{REF}$，M2 的 $V_{SG2}=V_{DD}-V_{REF}$；$\lambda=0$（且各源极与衬底相连，无体效应）时，共同的电流为

$$
\frac{\beta_N}{2}\big(V_{REF}-V_{TN}\big)^2=\frac{\beta_P}{2}\big(V_{DD}-V_{REF}-|V_{TP}|\big)^2 .
$$

### 第 2 步 — 解出 $V_{REF}$

两个过驱动电压都为正，开平方得

$$
\sqrt{\beta_N}\big(V_{REF}-V_{TN}\big)=\sqrt{\beta_P}\big(V_{DD}-V_{REF}-|V_{TP}|\big),
$$

$$
V_{REF}=\frac{\sqrt{\beta_P}\,(V_{DD}-|V_{TP}|)+\sqrt{\beta_N}\,V_{TN}}{\sqrt{\beta_N}+\sqrt{\beta_P}} .
$$

### 第 3 步 — 灵敏度

$V_{REF}$ 是 $V_{DD}$ 的线性函数，

$$
\frac{\partial V_{REF}}{\partial V_{DD}}=\frac{\sqrt{\beta_P}}{\sqrt{\beta_N}+\sqrt{\beta_P}} .
$$

因此

$$
S_{V_{DD}}^{V_{REF}}=\frac{V_{DD}}{V_{REF}}\,\frac{\partial V_{REF}}{\partial V_{DD}}
=\frac{\sqrt{\beta_P}\,V_{DD}}{\sqrt{\beta_P}\,(V_{DD}-|V_{TP}|)+\sqrt{\beta_N}\,V_{TN}} .
$$

### 第 4 步 — 匹配器件

记 $V_{REF}=aV_{DD}+b$，其中 $b=(\sqrt{\beta_N}V_{TN}-\sqrt{\beta_P}|V_{TP}|)/(\sqrt{\beta_N}+\sqrt{\beta_P})$。线性函数的灵敏度 $S=aV_{DD}/(aV_{DD}+b)$ 恰在 $b=0$，即 $\sqrt{\beta_N}V_{TN}=\sqrt{\beta_P}|V_{TP}|$ 时等于 1。$\beta_N=\beta_P$ 且 $V_{TN}=|V_{TP}|$ 时该条件成立，且

$$
V_{REF}=\frac{V_{DD}-|V_{TP}|+V_{TN}}{2}=\frac{V_{DD}}{2},\qquad
S_{V_{DD}}^{V_{REF}}=\frac{\sqrt{\beta}\,V_{DD}}{\sqrt{\beta}\,(V_{DD}-V_T)+\sqrt{\beta}\,V_T}=1 .
$$

此时有源分压器的特性与电阻分压器相同：$V_{DD}$ 变化 10%，$V_{REF}$ 也变化 10%。器件不匹配时 $S$ 不等于 1，只有在 $V_{DD}\gg V_T$ 时才趋近于 1。
