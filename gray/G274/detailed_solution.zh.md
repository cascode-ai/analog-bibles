# 详细步骤 - G274

$R_F$ 对漏极（输出）电压采样，并把电流送回栅极（输入）节点：这是电压并联反馈，闭环增益为跨阻。用 $y$ 参数表示 $R_F$，以 $R_F$ 作为基本放大器输入端和输出端的负载，取 $f=y_{12f}=-1/R_F$。

### 第 1 步 — 跨导

饱和区平方律给出 $g_m=\sqrt{2k'(W/L)I_D}$：

$$
g_m=\sqrt{2\left(180\ \mu\mathrm{A/V^2}\right)(100)(0.5\ \mathrm{mA})}=4.243\ \mathrm{mA/V}.
$$

### 第 2 步 — 反馈系数与计入负载的基本放大器

对于跨接在两个端口之间的 $R_F$，$y_{11f}=y_{22f}=1/R_F$，且

$$
f=y_{12f}=-\frac1{R_F}=-10^{-5}\ \mathrm S .
$$

理想电流源在栅极只看到 $R_F$（栅极不取电流），因此电流 $i$ 产生 $v_{gs}=iR_F$；漏极负载为 $R_L\parallel R_F=15\ \mathrm{k\Omega}\parallel100\ \mathrm{k\Omega}=13.04\ \mathrm{k\Omega}$（$r_o=\infty$）：

$$
a=\frac{v_o}{i}=-R_F\,g_m\,(R_L\parallel R_F)=-(100\ \mathrm{k\Omega})(4.243\ \mathrm{mA/V})(13.04\ \mathrm{k\Omega})=-5.53\ \mathrm{M\Omega}.
$$

### 第 3 步 — 环路增益与跨阻

$$
T=af=(-5.53\ \mathrm{M\Omega})(-10^{-5}\ \mathrm S)=55.3,
$$

$$
\frac{v_o}{i_i}=\frac{a}{1+T}=\frac{-5.53\ \mathrm{M\Omega}}{56.3}=-98.2\ \mathrm{k\Omega},
$$

接近理想值 $1/f=-R_F=-100$ kΩ。

### 第 4 步 — 输入电阻与输出电阻

两个端口都是并联连接，计入负载的电阻都除以 $1+T$：

$$
R_{in}=\frac{R_F}{1+T}=\frac{100\ \mathrm{k\Omega}}{56.3}=1.78\ \mathrm{k\Omega},\qquad
R_{out}=\frac{R_L\parallel R_F}{1+T}=\frac{13.04\ \mathrm{k\Omega}}{56.3}=232\ \Omega .
$$

直接节点分析给出 −98.2 kΩ、1.78 kΩ 和 232 Ω；末位的微小差别来自经 $R_F$ 的前馈电流，二端口近似忽略了这一电流。
