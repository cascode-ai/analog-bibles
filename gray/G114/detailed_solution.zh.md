# 详细步骤 - G114

曲线与直线相切，意味着二者有公共点且斜率相等。先用截距写出负载线，再对双曲线求导，解相切条件；最后沿负载线求 $I_cV_{ce}$ 的最大值加以印证。

### 第 1 步 — 负载线与双曲线的斜率

设负载线与 $V_{ce}$ 轴交于 $V_0>0$，与 $I_c$ 轴交于 $I_0>0$：

$$
I_c=I_0\left(1-\frac{V_{ce}}{V_0}\right),\qquad \frac{dI_c}{dV_{ce}}\bigg|_{\text{line}}=-\frac{I_0}{V_0}.
$$

在功率双曲线 $I_c=P/V_{ce}$（$P>0$，第一象限）上，任一点的斜率为

$$
\frac{dI_c}{dV_{ce}}\bigg|_{\text{hyperbola}}=-\frac{P}{V_{ce}^2}=-\frac{I_cV_{ce}}{V_{ce}^2}=-\frac{I_c}{V_{ce}},
$$

即等于原点到该点连线斜率的相反数。

### 第 2 步 — 相切条件

在切点 $(V_{ce},I_c)$ 处斜率相等，$I_c/V_{ce}=I_0/V_0$，故 $I_c=I_0V_{ce}/V_0$。该点同时在负载线上，代入得

$$
\frac{I_0V_{ce}}{V_0}=I_0\left(1-\frac{V_{ce}}{V_0}\right)\ \Rightarrow\ \frac{2V_{ce}}{V_0}=1\ \Rightarrow\ V_{ce}=\frac{V_0}{2},\qquad I_c=\frac{I_0}{2}.
$$

$(V_0,0)$ 与 $(0,I_0)$ 之间线段的中点恰为 $(V_0/2,\ I_0/2)$，命题得证。相切的双曲线对应 $P=I_0V_0/4$。

### 第 3 步 — 等价观点：负载线上的最大功耗

沿负载线，乘积 $P(V_{ce})=I_cV_{ce}$ 为

$$
P(V_{ce})=I_0V_{ce}\left(1-\frac{V_{ce}}{V_0}\right),\qquad \frac{dP}{dV_{ce}}=I_0\left(1-\frac{2V_{ce}}{V_0}\right)=0\ \Rightarrow\ V_{ce}=\frac{V_0}{2},
$$

且 $d^2P/dV_{ce}^2=-2I_0/V_0<0$，故为最大值，$P_{\max}=I_0V_0/4$。$P>P_{\max}$ 的双曲线与负载线不相交，$P<P_{\max}$ 的双曲线与之交于两点，只有 $P=P_{\max}$ 的双曲线在中点与之相切。因此，任一负载线的中点也是其上器件瞬时功耗最大的点。
