输出端为电学源极，输入端为漏极。曲线从原点上升，随后在 $\lambda=0$ 模型下进入水平平台。

$$V_{GS}=2\,\mathrm{V}-V_{out},\qquad V_{DS}=V_{in}-V_{out},\qquad V_{SB}=V_{out}.$$

$$V_{TH}=V_{TH0}+\gamma\left(\sqrt{2|\phi_F|+V_{out}}-\sqrt{2|\phi_F|}\right).$$

### 线性区

线性区满足 $V_{in}<2\,\mathrm{V}-V_{TH}(V_{out})$，输出由负载方程确定。

$$\frac{V_{out}}{R_1}=\beta\left[(V_{GS}-V_{TH})V_{DS}-\frac{V_{DS}^2}{2}\right].$$

当 $V_{DS}$ 远小于过驱动时，只有 $\beta R_1(V_{GS}-V_{TH})\gg1$ 才能近似跟随输入。

### 饱和平台

饱和平台满足

$$2\,\mathrm{V}-V_{out,s}-V_{TH}(V_{out,s})=\sqrt{\frac{2V_{out,s}}{\beta R_1}}>0.$$

平台始于 $V_{in,s}=2\,\mathrm{V}-V_{TH}(V_{out,s})$，延伸至 3 V。有限 $\beta R_1$ 下，平台低于 1.0918 V，转折输入介于 1.0918 V 和 1.3 V 之间。平台上界等于栅压减去该上界处的阈值电压。

![随输入电压变化的传输曲线](/q/R017/solution-transfer.zh.svg)
