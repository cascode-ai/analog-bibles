# 详细步骤 - G203

把 $R_F$ 当作栅极与漏极之间的普通电阻，求解这两个节点方程得到中频增益。然后在计入 $R_F$ 的情况下应用零值时间常数法：该电阻直接跨接在 $C_{gd}$ 两端，并经具有放大作用的漏极对 $C_{gs}$ 所在的栅极节点形成负载。

### 第 1 步 — 器件参数

$$
g_m=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V},\qquad
C_{gs}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF}.
$$

### 第 2 步 — 低频增益

在漏极（$v_o$）和栅极（$v_g$）列 KCL：

$$
v_o\Bigl(\frac1{R_L}+\frac1{R_F}\Bigr)=v_g\Bigl(\frac1{R_F}-g_m\Bigr)
\;\Rightarrow\;v_o=\frac{(0.02-1.94)\ \mathrm{mS}}{0.22\ \mathrm{mS}}\,v_g=-8.71\,v_g,
$$
$$
\frac{v_i}{R_S}=v_g\Bigl(\frac1{R_S}+\frac1{R_F}\Bigr)-\frac{v_o}{R_F}
\;\Rightarrow\;v_g=0.340\,v_i .
$$

因此

$$
\frac{v_o}{v_i}=(-8.71)(0.340)=-2.96 .
$$

### 第 3 步 — 零值电阻

- $C_{gs}$（栅极到地）：栅极看到 $R_S$，并与经 $R_F$ 通向漏极的通路并联；由于受控源 $g_mv_g$ 的作用，这条通路等效为 $(R_F+R_L)/(1+g_mR_L)$：
$$
R_{gs0}=R_S\parallel\frac{R_F+R_L}{1+g_mR_L}=10\ \mathrm{k\Omega}\parallel\frac{55\ \mathrm{k\Omega}}{10.68}=10\ \mathrm{k\Omega}\parallel5.15\ \mathrm{k\Omega}=3.40\ \mathrm{k\Omega}.
$$
- $C_{gd}$（栅极到漏极）：$R_F$ 直接跨接在其两端，与通常的密勒电阻并联：
$$
R_{gd0}=(R_S+R_L+g_mR_LR_S)\parallel R_F=111.8\ \mathrm{k\Omega}\parallel50\ \mathrm{k\Omega}=34.6\ \mathrm{k\Omega}.
$$

| 电容 | 电阻 | 时间常数 |
|---|---|---|
| $C_{gs}=74.7$ fF | 3.40 kΩ | 0.254 ns |
| $C_{gd}=14$ fF | 34.6 kΩ | 0.484 ns |

### 第 4 步 — −3-dB 频率

$$
T_0=0.254+0.484\ \mathrm{ns}=0.737\ \mathrm{ns},\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=216\ \mathrm{MHz}.
$$

精确节点分析给出 222 MHz。与无反馈的级（增益 −9.68，约 69 MHz）相比，经 $R_F$ 的并联反馈使增益降低约 3.3 倍，带宽提高约 3.1 倍。
