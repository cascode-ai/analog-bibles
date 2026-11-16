# 详细步骤 - R618

**思路。** 只有阈值失配时，差分对的失调（offset）等于该失配，$V_{OS} = \Delta V_{TH}$。令 $\Delta V_{TH} \le 2$ mV，由失配公式先解出栅面积 $WL$，再求出 $W$；对 5 mV 重复这一过程，并通过比例关系 $W \propto 1/V_{OS}^2$ 比较两个宽度。

### 第 1 步 — $V_{OS} \le 2$ mV 时的最小宽度

$\mu_nC_{ox}$ 和 $W/L$ 都相同时，两管漏极电流相等需要过驱动电压（overdrive voltage）相等，因此两管栅极电压之差必须等于阈值电压之差，即 $V_{OS} = \Delta V_{TH}$。$t_{ox} = 90$ Å 时，$0.1\times 90 = 9$（$W$、$L$ 以 µm 为单位，结果以 mV 为单位），因此指标可写为

$$V_{OS} = \frac{9\ \mathrm{mV\cdot\mu m}}{\sqrt{WL}} \le 2\ \mathrm{mV} .$$

取 $L = 0.5\ \mu$m 求解：

$$
\begin{aligned}
\sqrt{WL} &\ge \frac{9\ \mathrm{mV\cdot\mu m}}{2\ \mathrm{mV}} = 4.5\ \mu\mathrm{m},\\
WL &\ge (4.5\ \mu\mathrm{m})^2 = 20.25\ \mu\mathrm{m}^2,\\
W &\ge \frac{20.25\ \mu\mathrm{m}^2}{0.5\ \mu\mathrm{m}} = 40.5\ \mu\mathrm{m}, \qquad \frac{W}{L} = \frac{40.5}{0.5} = 81 .
\end{aligned}
$$

**验算。** $\sqrt{40.5\times0.5} = \sqrt{20.25} = 4.5\ \mu$m，$9/4.5 = 2.0$ mV。✓

### 第 2 步 — $V_{OS} \le 5$ mV 时的最小宽度

对 5 mV 重复同样的步骤：

$$
\begin{aligned}
\sqrt{WL} &\ge \frac{9\ \mathrm{mV\cdot\mu m}}{5\ \mathrm{mV}} = 1.8\ \mu\mathrm{m},\\
WL &\ge (1.8\ \mu\mathrm{m})^2 = 3.24\ \mu\mathrm{m}^2,\\
W &\ge \frac{3.24\ \mu\mathrm{m}^2}{0.5\ \mu\mathrm{m}} = 6.48\ \mu\mathrm{m}, \qquad \frac{W}{L} = 12.96 .
\end{aligned}
$$

### 第 3 步 — 比较与比例关系

$$\frac{W_{2\,\mathrm{mV}}}{W_{5\,\mathrm{mV}}} = \frac{40.5\ \mu\mathrm{m}}{6.48\ \mu\mathrm{m}} = 6.25 .$$

在 $L$ 固定时由 $V_{OS} = 9/\sqrt{WL}$ 解出 $W$，即可看出原因：

$$W = \frac{(9\ \mathrm{mV\cdot\mu m})^2}{L\,V_{OS}^2} \quad\Longrightarrow\quad W \propto \frac{1}{V_{OS}^2},$$

因此当失调缩小 $5/2 = 2.5$ 倍时，宽度要乘以

$$\left(\frac{5}{2}\right)^2 = 6.25 .$$

**影响。** $L$ 固定时，每个输入器件的栅面积和栅电容 $C_{GS} \approx \tfrac23WLC_{ox}$ 也增大到 6.25 倍，这会加重前级的负载，并使寄生极点频率降低。在给定的尾电流（tail current）下，更宽的器件还工作在更低的过驱动电压下，使差分对的线性输入范围变窄。失调每减半一次，面积就要增至四倍。

| 指标 | $\sqrt{WL}$ | $WL$ | $W$ | $W/L$ |
|---|---|---|---|---|
| $V_{OS} \le 5$ mV | 1.8 µm | 3.24 µm² | 6.48 µm | 12.96 |
| $V_{OS} \le 2$ mV | 4.5 µm | 20.25 µm² | 40.5 µm | 81 |

### 结果

$$W_{min}(2\ \mathrm{mV}) = \frac{(9/2)^2}{0.5}\ \mu\mathrm{m} = 40.5\ \mu\mathrm{m}\quad (W/L = 81),$$

相比之下，$W_{min}(5\ \mathrm{mV}) \approx 6.5\ \mu$m。2 mV 设计的宽度是后者的 **6.25 倍**（$W \propto 1/V_{OS}^2$），栅面积和输入电容也都是后者的 6.25 倍。

**常见错误。** 认为 $W \propto 1/V_{OS}$，从而以为失调缩小 2.5 倍只需把器件加宽 2.5 倍（约 16 µm）。失调实际按 $1/\sqrt{WL}$ 变化，16 µm 的器件给出的失调为 $9/\sqrt{8} = 3.2$ mV。

**常见错误。** 把比较结论弄反，即认为更严格的 2 mV 指标允许使用**更小**的器件。失调越小，需要的栅面积越**大**。

**常见错误。** 误读经验公式的单位（例如把 $t_{ox}$ 以纳米为单位代入），从而得到亚微米级的宽度。$t_{ox} = 90$ Å 时，系数为 $0.1\times90 = 9$ mV·µm，其中 $W$ 和 $L$ 以微米为单位。
