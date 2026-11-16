# 详细步骤 - R720

**思路。** 感应电压 $|v_2|_{peak} = \omega MI_p$ 在电流固定时与互感 $M$ 成正比，因此只有 $M$ 减小 4 倍，电压才会减小 4 倍。写出地平面上方长导线的 $M$（镜像法），在当前间距下求值，再解出使其变为四分之一的间距。由于存在对数，答案并不是简单的“间距增大到 4 倍”。

### 第 1 步 — 地平面上方两根导线的互感

由 $v_2 = M\,di_1/dt = \omega MI_p\cos\omega t$，在 $\omega$ 和 $I_p$ 固定时，要使电压减小为原来的四分之一，就需要 $M_{new} = M_{old}/4$，而只有间距 $d$ 可以改变。用深度为 $h$ 的镜像导线代替地平面中的返回路径，单位长度的互感为

$$M' = \frac{\mu_0}{2\pi}\ln\frac{\sqrt{d^2 + (2h)^2}}{d} = \frac{\mu_0}{4\pi}\ln\left[1 + \left(\frac{2h}{d}\right)^2\right],$$

其中 $h = 5$ mm，$\mu_0/4\pi = 0.1$ nH/mm；对数的自变量是到镜像导线的距离与到另一根导线的距离之比的平方。

### 第 2 步 — 当前值（$d = 1$ mm）

$$\frac{2h}{d} = \frac{10\ \mathrm{mm}}{1\ \mathrm{mm}} = 10, \qquad \ln(1 + 10^2) = \ln 101 = 4.615 .$$

$$M'_{old} = 0.1\times4.615 = 0.4615\ \mathrm{nH/mm}, \qquad M_{old} = 0.4615\times4\ \mathrm{mm} = 1.85\ \mathrm{nH}.$$

感应电压为 $\omega M_{old}I_p = (2\pi\times10^8)(1.85\ \mathrm{nH})(1\ \mathrm{mA}) = 1.16$ mV 峰值。

### 第 3 步 — 所需的间距

长度（4 mm）和因子 0.1 nH/mm 在两种情况下相同，因此 $M_{new} = M_{old}/4$ 只成为对对数项的条件：

$$\ln\left[1 + \left(\frac{2h}{d}\right)^2\right] = \frac{\ln 101}{4} = \frac{4.615}{4} = 1.154 .$$

$$1 + \left(\frac{2h}{d}\right)^2 = e^{1.154} = 3.170 \;\Longrightarrow\; \left(\frac{2h}{d}\right)^2 = 2.170 \;\Longrightarrow\; \frac{2h}{d} = \sqrt{2.170} = 1.473 .$$

取 $2h = 10$ mm：

$$d = \frac{10\ \mathrm{mm}}{1.473} = 6.79\ \mathrm{mm}.$$

**验算：** $\ln[1 + (10/6.79)^2] = \ln(1 + 2.170) = \ln 3.170 = 1.154$；$M = 0.1\times1.154\times4 = 0.46$ nH $= 1.85/4$ ✓，感应电压变为 $1.16/4 = 0.29$ mV 峰值。

### 第 4 步 — 为什么简单近似在这里不成立

当 $d \ll 2h$ 时可以略去“1”，$M' \approx (\mu_0/2\pi)\ln(2h/d) = 0.2\ln(2h/d)$ nH/mm，由此得到

$$\ln\frac{10}{d} = \frac{\ln10}{4} \;\Longrightarrow\; \frac{10}{d} = 10^{1/4} = 1.778 \;\Longrightarrow\; d = 5.6\ \mathrm{mm}.$$

但新的间距与 $2h = 10$ mm 相比**并不**小（$(2h/d)^2 \approx 2$，而不是 $\gg 1$），因此必须使用精确表达式，得到 6.8 mm。

由于 $M$ 只以对数方式依赖于间距，靠拉开导线来减小耦合代价很高：要实现 4× 的降低，间距需要增大到 6.8×，此时两根导线之间的距离几乎与它们到各自镜像的距离相当。一旦 $d$ 与 $2h$ 相当，镜像电流的场就会在导线 2 处抵消导线 1 的场，耦合便下降得更快。

### 结果

$$\ln\left[1 + \left(\frac{10\ \mathrm{mm}}{d}\right)^2\right] = \frac{\ln 101}{4} \;\Longrightarrow\; d \approx 6.8\ \mathrm{mm},$$

这使 $M$ 从 1.85 nH 降到约 0.46 nH，感应电压从 1.16 mV 降到约 0.29 mV 峰值。

**常见错误。** 假设 $M \propto 1/d$（答案为 4 mm）或 $M \propto 1/d^2$（答案为 2 mm）。$M$ 只通过对数依赖于间距，因此需要大得多的 $d$ 变化。

**常见错误。** 不加检验地使用 $0.2\ln(2h/d)$，得到 5.6 mm。该式只在 $d \ll 2h$ 时成立，而所需的间距不满足这一条件。

**常见错误。** 减小间距（例如减到 0.25 mm）。让导线靠得更近会**增大**耦合。
