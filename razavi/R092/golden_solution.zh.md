# 参考答案 - R092

## 参考答案

令 $k=R_S/(R_F+R_S)$，$V_{TH}(v)=V_{TH0}+\gamma(\sqrt{2|\phi_F|+v}-\sqrt{2|\phi_F|})$。

- 截止区为分压直线 $V_{out}=kV_{in}$。由 $(1-k)V_{in,on}=V_{TH}(kV_{in,on})$ 求导通点，且 $V_{out,on}=kV_{in,on}$。若 $(1-k)V_{DD}\le V_{TH}(kV_{DD})$，整段扫描都沿分压直线。
- 导通后，漏极固定在 $V_{DD}$，因此 $M_1$ 保持饱和。输出满足

$$\frac{V_{in}-V_{out}}{R_F}+\frac{\beta}{2}[V_{in}-V_{out}-V_{TH}(V_{out})]^2=\frac{V_{out}}{R_S}.$$

斜率从 $k$ 起步。当 $g_m$ 远大于两个电阻的电导时，斜率近似为 $1/(1+\eta)$，其中 $\eta=dV_{TH}/dV_{out}$。

![R092 输出传输特性](/q/R092/solution-vout.zh.svg)

## 评分说明

- +2 分。给出导通前的分压直线 $V_{out}=V_{in}R_S/(R_S+R_F)$、导通点 $V_{in,on}\approx V_{TH}(1+R_S/R_F)$，以及导通后斜率向 $1/(1+\eta)<1$ 上升的饱和跟随区。
- +1 分。遗漏一项特征，或忽略体效应。
- 0 分。跟随区正确，但忽略 $R_F$ 并把导通前输出设为零。
- −2 分。断言特性反相、斜率大于 1、$M_1$ 进入线性区，或把 $R_F$ 看成接到 $V_{DD}$ 或地。
