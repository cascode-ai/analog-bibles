# 详细步骤 - R669

**思路。** 噪声要求确定了电容（$C \to 4C$）。单级运放的压摆率等于尾电流除以负载电容，因此压摆率不变就确定了尾电流。在电流和减半的过驱动电压都已知的情况下，由平方律关系即可求出 $G_m$ 和输入对的宽长比（aspect ratio）。

### 第 1 步 — 电容缩放（由噪声要求得出）

摆幅减半，因此均方根（rms）噪声必须减半，均方噪声必须除以 4。只有 $kT/C$ 噪声时：

$$\overline{v_n^2} = \frac{kT}{C} \quad\Rightarrow\quad \frac{kT}{C'} = \frac14\cdot\frac{kT}{C} \quad\Rightarrow\quad C' = 4C .$$

所有电容，包括运放必须驱动的负载电容，都乘以 4。

### 第 2 步 — 单级运放的压摆率

在压摆期间，输入对完全切换到一侧，最多只有全部尾电流 $I_{SS}$ 对负载电容 $C$ 充电或放电：

$$SR = \frac{dV_{out}}{dt}\bigg|_{max} = \frac{I_{SS}}{C}.$$

压摆率取决于尾**电流**，而不是 $g_m$。

### 第 3 步 — 保持压摆率不变所需的尾电流

$$\frac{I_{SS}'}{C'} = \frac{I_{SS}}{C} \quad\Rightarrow\quad I_{SS}' = I_{SS}\,\frac{C'}{C} = 4I_{SS}.$$

尾电流必须增大到 **4** 倍，每个输入晶体管现在流过 $I_D' = I_{SS}'/2 = 4I_D$。

### 第 4 步 — 跨导

对每个输入器件，令 $V_{ov} = V_{GS} - V_{TH}$，有

$$g_m = \frac{2I_D}{V_{ov}} = \frac{2(I_{SS}/2)}{V_{ov}} = \frac{I_{SS}}{V_{ov}} ,$$

且 $G_m = g_{m1}$。代入 $I_{SS} \times4$ 和 $V_{ov} \times\tfrac12$：

$$G_m' = \frac{4I_{SS}}{V_{ov}/2} = 8\,\frac{I_{SS}}{V_{ov}} = 8\,G_m .$$

$G_m$ 增大到 **8** 倍：电流贡献了四倍，较小的过驱动电压又贡献了两倍。小信号时间常数变为

$$\frac{C'}{G_m'} = \frac{4C}{8G_m} = \frac12\cdot\frac{C}{G_m},$$

即原来的一半：保持压摆率不变所得到的 $G_m$ 超过了维持相同线性建立所需的 4×，因此小信号建立速度提高到两倍。

### 第 5 步 — 宽长比

由 $I_D = \frac12\mu C_{ox}(W/L)V_{ov}^2$ 得

$$\frac{W}{L} = \frac{2I_D}{\mu C_{ox}V_{ov}^2},$$

代入 $I_D \times4$、$V_{ov}^2 \times\tfrac14$ 以及相同的 $\mu C_{ox}$：

$$\left(\frac{W}{L}\right)' = \frac{2(4I_D)}{\mu C_{ox}(V_{ov}/2)^2} = \frac{4}{1/4}\cdot\frac{2I_D}{\mu C_{ox}V_{ov}^2} = 16\,\frac{W}{L}.$$

在沟道长度相同时，$W' = 16W$。用 $g_m = \mu C_{ox}(W/L)V_{ov}$ 验证：变化因子为 $16 \times \tfrac12 = 8$，与第 4 步一致。✓

### 第 6 步 — 功耗

$$P' = V_{DD}'\,I_{SS}' = \frac{V_{DD}}{2}\cdot4I_{SS} = 2\,V_{DD}I_{SS} = 2P .$$

功耗**加倍**：在动态范围受 $kT/C$ 限制时，电容增大得比电源电压减小得更快，而以相同的压摆率给四倍的电容充电需要四倍的电流。

**数值示例。** 原来 $I_{SS} = 1$ mA，$V_{ov} = 0.2$ V：$G_m = 1\ \mathrm{mA}/0.2\ \mathrm{V} = 5$ mS。缩放后：$I_{SS} = 4$ mA，$V_{ov} = 0.1$ V，$G_m = 4\ \mathrm{mA}/0.1\ \mathrm{V} = 40$ mS（8×）。例如取 $C = 1$ pF → 4 pF，压摆率保持为 $1\ \mathrm{mA}/1\ \mathrm{pF} = 4\ \mathrm{mA}/4\ \mathrm{pF} = 1$ V/ns。

### 结果

- 尾电流：$I_{SS} \to 4I_{SS}$（由 $SR = I_{SS}/C$ 及 $C \times4$ 得出）。
- 跨导：$G_m = I_{SS}/V_{ov} \to 8G_m$（是保持 $C/G_m$ 不变所需的 4× 的两倍，因此小信号建立速度提高到两倍）。
- 尺寸：$W/L \to 16\,W/L$（$L$ 不变时 $W \to 16W$）。
- 功耗：$V_{DD}I_{SS} \to (V_{DD}/2)(4I_{SS}) = 2V_{DD}I_{SS}$，即加倍。

**常见错误。** 为保持压摆率不变而让尾电流保持不变（或只加倍）。它所充电的电容增大到 4 倍，因此电流也必须增大到 4 倍。

**常见错误。** 认为压摆率正比于 $G_m$。压摆是输入对完全切换时的大信号效应；起作用的只有 $I_{SS}$。

**常见错误。** 让 $W/L$ 与电流一起按 4 缩放，这相当于默认过驱动电压不变。过驱动电压减半时，$W/L = 2I_D/(\mu C_{ox}V_{ov}^2)$ 必须增大到 $4\times4 = 16$ 倍。
