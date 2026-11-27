# 参考答案 - R069

### 直流偏置

令 $V_{ov}=V_{in}-V_{TH}$，$\beta=\mu_nC_{ox}(W/L)=13.4\ \mathrm{mA/V^2}$，联立负载线与线性区电流式：

$$V_{out}=V_{ov}-0.050\ \mathrm{V},\qquad
\frac{V_{DD}-V_{out}}{R_D}=\beta\left(V_{ov}V_{out}-\frac{V_{out}^2}{2}\right).$$

取物理上可行的解，得 $V_{in}=V_{TH}+V_{ov}\approx 1.144\ \mathrm{V}$，其中 $V_{ov}\approx 0.444\ \mathrm{V}$，$V_{DS}=V_{out}\approx 0.394\ \mathrm{V}$，满足 $0<V_{DS}<V_{ov}$。

### 小信号增益

$$g_m=\beta V_{DS}\approx 5.28\ \mathrm{mS},\qquad
g_{ds}=\beta(V_{ov}-V_{DS})=0.67\ \mathrm{mS}.$$

$$A_v=-\frac{g_m}{g_{ds}+1/R_D}\approx -4.5\ \mathrm{V/V}.$$

## 评分说明

- +2 分。$V_{in}\approx 1.144\ \mathrm{V}$（容差 $\pm 0.01\ \mathrm{V}$），$A_v\approx -4.5\ \mathrm{V/V}$（容差 $\pm 5\%$），并计入线性区输出电导。
- +1 分。方法正确，有一处失误。
- 0 分。$V_{in}$ 正确，但因忽略线性区输出电导，将增益算成 $-\beta V_{DS}R_D\approx -10.6$。
- −2 分。断言进入线性区后仍为饱和区增益（约 $-11.7$ 或幅值更大），或直接在边界输入电压上加 50 mV 得到 1.187 V。
