# 详细步骤 - G276

$R_F$ 对集电极（输出）电压采样，并把电流送回基极（输入）节点：这是电压并联反馈，增益为跨阻。采用 $R_F$ 的 $y$ 参数：它同时成为基本放大器输入端和输出端的负载，且 $f=y_{12f}=-1/R_F$。与 MOS 版本不同，基极经 $r_\pi$ 吸取电流，$r_\pi$ 成为输入节点的负载。

### 第 1 步 — 小信号参数

$$
g_m=\frac{I_C}{V_T}=38.46\ \mathrm{mA/V},\qquad r_\pi=\frac{\beta}{g_m}=5.2\ \mathrm{k\Omega},\qquad r_o=\frac{V_A}{I_C}=100\ \mathrm{k\Omega}.
$$

### 第 2 步 — 计入负载的基本放大器

在输入端，电流源看到 $R_F$（来自 $y_{11f}$）与 $r_\pi$ 并联；在输出端，$R_L$、$R_F$（来自 $y_{22f}$）和 $r_o$ 三者并联：

$$
R_i=R_F\parallel r_\pi=2\ \mathrm{k\Omega}\parallel5.2\ \mathrm{k\Omega}=1444\ \Omega,\qquad
R_o=R_L\parallel R_F\parallel r_o=990\ \Omega .
$$

电流 $i$ 产生 $v_{be}=iR_i$，集电极电流 $g_mv_{be}$ 从输出节点流出：

$$
a=\frac{v_o}{i}=-R_i\,g_m\,R_o=-(1444\ \Omega)(38.46\ \mathrm{mA/V})(990\ \Omega)=-55.0\ \mathrm{k\Omega}.
$$

### 第 3 步 — 环路增益与跨阻

$$
T=af=(-55.0\ \mathrm{k\Omega})\left(-\frac1{2\ \mathrm{k\Omega}}\right)=27.5,\qquad
\frac{v_o}{i_i}=\frac{a}{1+T}=\frac{-55.0\ \mathrm{k\Omega}}{28.5}=-1.93\ \mathrm{k\Omega}.
$$

$T=27.5$ 时，结果比理想值 $-R_F=-2$ kΩ 低 3.5%。

### 第 4 步 — 输入电阻与输出电阻

两个端口都是并联连接，计入负载的电阻都除以 $1+T$：

$$
R_{in}=\frac{1444\ \Omega}{28.5}=50.7\ \Omega,\qquad R_{out}=\frac{990\ \Omega}{28.5}=34.7\ \Omega .
$$

直接节点分析给出 −1.93 kΩ、51.3 Ω 和 35.2 Ω；微小差别来自经 $R_F$ 的前馈，二端口方法忽略了它。若在输入端忽略 $r_\pi$，$T$ 将被高估约 40%。
