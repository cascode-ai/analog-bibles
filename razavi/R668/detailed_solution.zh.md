# 详细步骤 - R668

**思路。** 把三个要求串起来：在 $kT/C$ 噪声下保持动态范围不变，迫使 $C \to 4C$；保持时间常数 $C/G_m$ 不变，进而迫使 $G_m \to 4G_m$；在过驱动电压减半的情况下，由 $g_m = 2I_D/V_{ov}$ 和 $g_m = \mu C_{ox}(W/L)V_{ov}$ 求出输入对的漏极电流和宽长比。

### 第 1 步 — 电容缩放（由噪声要求得出）

摆幅减半，因此均方根（rms）噪声必须减半，均方噪声必须减小 4 倍。由 $\overline{v_n^2} = kT/C$：

$$\frac{kT}{C'} = \frac14\cdot\frac{kT}{C} \quad\Rightarrow\quad C' = 4C .$$

所有电容都乘以 4，这使它们的比值以及闭环增益（closed-loop gain）保持不变。

### 第 2 步 — 跨导缩放（由时间常数得出）

在 $C' = 4C$ 的情况下保持 $\tau \propto C/G_m$ 不变：

$$\frac{4C}{G_m'} = \frac{C}{G_m} \quad\Rightarrow\quad G_m' = 4G_m .$$

对于单级运放，$G_m$ 就是每个输入晶体管（$M_1$、$M_2$）的跨导 $g_{m1}$，因此

$$g_{m1}' = 4g_{m1}.$$

### 第 3 步 — 输入晶体管的平方律关系

每个输入晶体管流过 $I_D = I_{SS}/2$，且

$$I_D = \frac12\,\mu C_{ox}\,\frac{W}{L}\,V_{ov}^2, \qquad g_m = \mu C_{ox}\,\frac{W}{L}\,V_{ov} = \frac{2I_D}{V_{ov}} .$$

已知：$V_{ov}' = V_{ov}/2$，$\mu C_{ox}$ 相同，$L$ 相同。

### 第 4 步 — 漏极电流与尾电流

由 $g_m = 2I_D/V_{ov}$ 得 $I_D = g_mV_{ov}/2$；代入 $g_m \times4$ 和 $V_{ov} \times\tfrac12$：

$$I_D' = \frac{(4g_m)(V_{ov}/2)}{2} = 2\cdot\frac{g_mV_{ov}}{2} = 2I_D ,$$

因此尾电流加倍：

$$I_{SS}' = 2I_{SS}.$$

在较小的过驱动电压下，$g_m/I_D = 2/V_{ov}$ 加倍，因此 $g_m$ 增大 4× 只需要 2× 的电流。

### 第 5 步 — 宽长比

由 $g_m = \mu C_{ox}(W/L)V_{ov}$：

$$\left(\frac{W}{L}\right)' = \frac{4g_m}{\mu C_{ox}(V_{ov}/2)} = 8\cdot\frac{g_m}{\mu C_{ox}V_{ov}} = 8\,\frac{W}{L}.$$

$L$ 固定时，$W' = 8W$。用电流方程验证：

$$I_D' = \frac12\,\mu C_{ox}\left(8\,\frac{W}{L}\right)\left(\frac{V_{ov}}{2}\right)^2 = 8\cdot\frac14\cdot\frac12\,\mu C_{ox}\,\frac{W}{L}\,V_{ov}^2 = 2I_D .\ \checkmark$$

### 第 6 步 — 功耗与副作用

$$P' = V_{DD}'\,I_{SS}' = \frac{V_{DD}}{2}\cdot2I_{SS} = V_{DD}I_{SS} = P :$$

电源减半恰好抵消了电流的加倍。

**数值示例。** 原来 $I_{SS} = 1$ mA（每个器件 0.5 mA），$V_{ov} = 0.2$ V，因此 $g_{m1} = 2(0.5\ \mathrm{mA})/(0.2\ \mathrm{V}) = 5$ mS。缩放后，$V_{ov} = 0.1$ V，$I_{SS} = 2$ mA（每个器件 1 mA），因此 $g_{m1} = 2(1\ \mathrm{mA})/(0.1\ \mathrm{V}) = 20$ mS，大了四倍，符合要求。

**副作用。** 宽 8× 的输入器件，其栅电容（$\approx \tfrac23WLC_{ox}$）也约为 8×，而其他电容只增大了 4×；这部分额外的输入电容会使反馈系数（feedback factor）略有减小，并加重电路负载。

### 结果

- 尾电流：$I_{SS} \to 2I_{SS}$（每个器件的电流加倍）。
- 尺寸：$W/L \to 8\,W/L$，即在 $L$ 不变时 $W \to 8W$。
- 功耗：$V_{DD}I_{SS} \to (V_{DD}/2)(2I_{SS})$，保持不变。

这些结果来自 $C \times4$（$kT/C$ 噪声减半）、$G_m \times4$（$C/G_m$ 不变），以及 $g_m = 2I_D/V_{ov} = \mu C_{ox}(W/L)V_{ov}$ 中减半的过驱动电压。

**常见错误。** 把尾电流和 $W/L$ 都按 $g_m$ 的因子 4 缩放。这只在过驱动电压不变时成立；当 $V_{ov}$ 减半时，电流只增大到 2 倍，而 $W/L$ 增大到 8 倍。

**常见错误。** 随电源一起减小电流或宽度，或者保持 $G_m$ 不变。为满足噪声目标，电容必须增大到 4 倍，因此为保持速度，$G_m$ 也必须增大到 4 倍，输入对会变大而不是变小。
