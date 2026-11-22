# 详细步骤 - A278

当 $R_z>1/g_{m6A}$ 时，$R_z$–$C_c$ 支路的零点移入左半平面；令它恰好落在 $p_2$ 上，即可确定所需的 $R_z$。由于 $R_z$ 由二极管连接的 M6B 实现，$R_z=1/g_{m6B}$，而 $g_{m6B}$ 和 $g_{m6A}$ 都是平方律 p 沟道跨导，该条件就变为宽长比、电流和电容之间的比例关系。随后代入数值完成设计。所有晶体管都饱和，$i_D=\frac{K'W}{2L}(v_{GS}-V_T)^2$。

### 第 1 步 — 对 $R_z$ 的对消条件

令零点等于输出极点：

$$
z_1=-\frac1{C_c(R_z-1/g_{m6A})}=p_2=-\frac{g_{m6A}}{C_L}
\;\Rightarrow\;
R_z-\frac1{g_{m6A}}=\frac{C_L}{g_{m6A}C_c}
\;\Rightarrow\;
R_z=\frac1{g_{m6A}}\cdot\frac{C_c+C_L}{C_c}.
$$

$R_z$ 大于 $1/g_{m6A}$，因此零点位于左半平面。

### 第 2 步 — M6B 的尺寸规律

M6B 流过 $I_8$（M8 通过 M6B 抽取该电流；M11 把相同电流送回第一级节点，因此不从第一级取直流电流），M6A 流过 $I_6$。由 $g_m=\sqrt{2K'_P(W/L)I_D}$ 和 $R_z=1/g_{m6B}$，第 1 步变为 $g_{m6A}/g_{m6B}=(C_c+C_L)/C_c$。两边平方：

$$
\frac{(W_{6A}/L_{6A})I_6}{(W_{6B}/L_{6B})I_8}=\left(\frac{C_c+C_L}{C_c}\right)^2
\;\Rightarrow\;
\frac{W_{6B}}{L_{6B}}=\frac{W_{6A}}{L_{6A}}\cdot\frac{I_6}{I_8}\left(\frac{C_c}{C_c+C_L}\right)^2 .
$$

由于 $K'_P$ 被约去，零点随工艺和温度跟踪 $p_2$。

### 第 3 步 — 设计 M6B、M8 和 M9

取 $W_{6A}/L_{6A}=94$，$I_6=I_7=95$ µA，$I_8=15$ µA，$C_c=3$ pF，$C_L=10$ pF：

$$
\frac{W_{6B}}{L_{6B}}=94\cdot\frac{95\ \mu\mathrm A}{15\ \mu\mathrm A}\left(\frac{3\ \mathrm{pF}}{13\ \mathrm{pF}}\right)^2=31.7\approx32\ (32\ \mu\mathrm m/1\ \mu\mathrm m).
$$

M8 和 M9 与 M5（30 µA 时为 4.5/1）共用 $V_{BIAS}$，宽长比与电流成正比：

$$
\frac{W_8}{L_8}=\frac{W_9}{L_9}=4.5\cdot\frac{15\ \mu\mathrm A}{30\ \mu\mathrm A}=2.25\quad(2.25\ \mu\mathrm m/1\ \mu\mathrm m).
$$

M10 和 M11 取相同尺寸（任意合适值），使 $I_{11}=I_{10}=I_9=I_8=15$ µA。

### 第 4 步 — 所得 $R_z$ 与零极点校核

$$
g_{m6B}=\sqrt{2(50\ \mu\mathrm{A/V^2})(31.7)(15\ \mu\mathrm A)}=218\ \mu\mathrm S,\qquad R_z=\frac1{g_{m6B}}=4.59\ \mathrm{k\Omega},
$$
$$
g_{m6A}=\sqrt{2(50\ \mu\mathrm{A/V^2})(94)(95\ \mu\mathrm A)}=945\ \mu\mathrm S\quad(1/g_{m6A}=1.06\ \mathrm{k\Omega}).
$$

$$
\begin{aligned}
p_2&=-\frac{g_{m6A}}{C_L}=-\frac{945\ \mu\mathrm S}{10\ \mathrm{pF}}=-9.45\times10^7\ \mathrm{rad/s}\ (-15.0\ \mathrm{MHz}),\\
z_1&=-\frac1{(3\ \mathrm{pF})(4.59\ \mathrm{k\Omega}-1.06\ \mathrm{k\Omega})}=-9.45\times10^7\ \mathrm{rad/s}\ (-15.0\ \mathrm{MHz}).
\end{aligned}
$$

零点正好落在输出极点上。尺寸取整为 32/1 时，$R_z=4.56$ kΩ，$z_1=-15.1$ MHz，仍基本与 $p_2$ 重合。M6B 的工作点为 $V_{SG6B}=0.7\ \mathrm V+\sqrt{2(15\ \mu\mathrm A)/[(50\ \mu\mathrm{A/V^2})(31.7)]}=0.84$ V。
