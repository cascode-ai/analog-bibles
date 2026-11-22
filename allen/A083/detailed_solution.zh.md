# 详细步骤 - A083

先求出晶体管在 10 µA 下的小信号参数，再在漏极加测试电压并写出源极节点关系，求出从漏极看进去的电阻：负反馈电阻把输出电流转换为与之相抵的栅源电压，从而把 $r_{ds}$ 放大。

### 第 1 步 — $I_D=10\ \mu$A 时的小信号参数

晶体管处于饱和区（电流沉必须如此），因此

$$
g_m=\sqrt{2K'\frac WL I_D}=\sqrt{2(110\ \mu\mathrm{A/V^2})(2)(10\ \mu\mathrm A)}=66.3\ \mu\mathrm S,
\qquad
r_{ds}\approx\frac{1}{\lambda I_D}=\frac{1}{(0.04\ \mathrm{V^{-1}})(10\ \mu\mathrm A)}=2.5\ \mathrm{M\Omega}.
$$

负反馈电阻 $r=100\ \mathrm{k\Omega}$，流过直流电流时压降为 1 V。

### 第 2 步 — 由小信号电路求输出电阻

栅极接固定直流电压 $V_{GG}$（交流地），忽略体效应。在漏极加 $v_{out}$，设流入电流为 $i_{out}$。同一电流流过 $r$，因此源极电压 $v_s=i_{out}r$，$v_{gs}=-i_{out}r$。流入漏极的电流等于受控源电流加上流过 $r_{ds}$ 的电流：

$$
i_{out}=g_mv_{gs}+\frac{v_{out}-v_s}{r_{ds}}=-g_mri_{out}+\frac{v_{out}-i_{out}r}{r_{ds}} .
$$

解出 $v_{out}/i_{out}$：

$$
r_{out}=\frac{v_{out}}{i_{out}}=r+r_{ds}+g_mr_{ds}r=r+r_{ds}(1+g_mr).
$$

### 第 3 步 — 数值

$$
r_{out}=0.1\ \mathrm{M\Omega}+2.5\ \mathrm{M\Omega}+(66.3\ \mu\mathrm S)(2.5\ \mathrm{M\Omega})(100\ \mathrm{k\Omega})
=0.1+2.5+16.6=19.2\ \mathrm{M\Omega}.
$$

源极负反馈使输出电阻比 $r_{ds}=2.5\ \mathrm{M\Omega}$ 提高了 $1+g_mr=7.6$ 倍。主导项为 $g_mr_{ds}r=16.6\ \mathrm{M\Omega}$：漏极电压变化引起电流变化，$r$ 上电压的相应变化使 $v_{gs}$ 反向变化，这一负反馈使电流几乎保持不变。
