# 详细步骤 - A070

开关中没有电流，沟道两端都处于 $V_S$，因此 p 沟道器件工作在非饱和区的 $V_{SD}=0$ 处。其小信号导通电阻是该点 $\partial|i_D|/\partial v_{SD}$ 的倒数；它通过源栅驱动和体效应（此时以 5 V 的衬底为参考）随 $V_S$ 变化。

### 第 1 步 — 偏置条件

两端都在 $V_S$（电位较高的一端作源极），栅极为 0 V，衬底为 5 V：

$$
V_{SD}=0,\qquad V_{SG}=V_S,\qquad V_{BS}=5\ \mathrm V-V_S .
$$

n 阱衬底比源极高 $5\ \mathrm V-V_S$，这一反偏使阈值的幅值升高：$|V_T|=0.7+0.57(\sqrt{0.8+V_{BS}}-\sqrt{0.8})$ V。

### 第 2 步 — $V_{SD}=0$ 处的导通电阻

$$
\frac{\partial|i_D|}{\partial v_{SD}}=K'\frac WL\big(v_{SG}-|V_T|-v_{SD}\big)
\quad\Rightarrow\quad
r_{ON}=\frac{1}{K'(W/L)(V_{SG}-|V_T|)},
$$

适用于 $V_{SG}>|V_T|$，否则晶体管截止。这里 $K'W/L=(50\ \mu\mathrm{A/V^2})(4)=200\ \mu\mathrm{A/V^2}$。

### 第 3 步 — 三种情况

$V_S=3$ V（$V_{BS}=2$ V）时：

$$
|V_T|=0.7\ \mathrm V+0.57\ \mathrm{V^{1/2}}\big(\sqrt{2.8\ \mathrm V}-\sqrt{0.8\ \mathrm V}\big)=1.144\ \mathrm V,\qquad
r_{ON}=\frac{1}{(200\ \mu\mathrm{A/V^2})(3\ \mathrm V-1.144\ \mathrm V)}=2.69\ \mathrm{k\Omega}.
$$

| $V_S$ (V) | $V_{SG}$ (V) | $V_{BS}$ (V) | $\lvert V_T\rvert$ (V) | $V_{SG}-\lvert V_T\rvert$ (V) | $R$ |
|---|---|---|---|---|---|
| 1.0 | 1.0 | 4.0 | 1.439 | < 0 | ∞（截止） |
| 3.0 | 3.0 | 2.0 | 1.144 | 1.856 | 2.69 kΩ |
| 5.0 | 5.0 | 0 | 0.700 | 4.300 | 1.16 kΩ |

$V_S=1$ V 时，4 V 的衬底偏置使 $|V_T|$ 升至 1.44 V，高于 1 V 的源栅电压，开关截止；若不计体效应，它将以 16.7 kΩ 导通。因此 p 沟道开关与 n 沟道开关恰好相反：信号电平高时导通最好，电平低时截止。
