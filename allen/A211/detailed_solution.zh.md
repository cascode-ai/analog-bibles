# 详细步骤 - A211

M1 是 n 沟道跟随管：它从 +2.5 V 向输出端提供电流，而 200 µA 电流沉和 10 kΩ 电阻从输出端取走电流。$v_{IN}=+2.5$ V 使 M1 导通最强时输出最高；此时 M1 必须提供电流沉的电流加上电阻电流。用 M1 的平方律电流在输出端列基尔霍夫电流定律（KCL）方程并求解。

### 第 1 步 — M1 的工作条件

$v_{IN}=+2.5$ V 时，M1 的栅极和漏极都位于 +2.5 V，源极位于 $v_{OUT}$，因此

$$
V_{GS1}=V_{DS1}=2.5-v_{OUT}.
$$

由于 $V_{DS1}=V_{GS1}>V_{GS1}-V_T$，M1 处于饱和区：

$$
I_{D1}=\frac{K'_N}2\frac WL(V_{GS1}-V_T)^2=(5.5\ \mathrm{mA/V^2})(2.5-v_{OUT}-0.7)^2,
$$

其中 $\frac{K'_N}2\frac WL=\frac{110\ \mu\mathrm{A/V^2}}{2}(100)=5.5\ \mathrm{mA/V^2}$。

### 第 2 步 — 输出端的 KCL

稳态时电容中没有电流，因此 M1 向电流沉和电阻供电：

$$
(5.5\ \mathrm{mA/V^2})(1.8\ \mathrm V-v_{OUT})^2=200\ \mu\mathrm A+\frac{v_{OUT}}{10\ \mathrm{k\Omega}} .
$$

### 第 3 步 — 求解

令 $y=1.8\ \mathrm V-v_{OUT}$，方程化为 $(5.5\ \mathrm{mA/V^2})y^2+(0.1\ \mathrm{mA/V})y-0.38\ \mathrm{mA}=0$，其正根为

$$
y=\frac{-0.1+\sqrt{0.1^2+4(5.5)(0.38)}}{2(5.5)}\ \mathrm V=0.254\ \mathrm V,
$$

$$
v_{OUT}(\max)=1.8\ \mathrm V-y=1.55\ \mathrm V .
$$

此时 M1 流过 $200\ \mu\mathrm A+1.546\ \mathrm V/10\ \mathrm{k\Omega}=355\ \mu$A。检验：$V_{DS1}=0.95$ V 大于 $V_{GS1}-V_T=0.25$ V，M1 确实处于饱和区。与 p 沟道版本不同，n 沟道跟随器在摆幅顶端仍保持导通，其最大输出约为 $v_{IN}-V_T$ 再减去流过 355 µA 所需的过驱动电压。
