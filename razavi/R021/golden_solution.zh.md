# Golden Solution - R021

## 参考答案

栅极和源极使 $V_{GS}=1\,\mathrm V$ 固定，衬底输入给出
$$V_{SB}=1\,\mathrm V-V_{in},\qquad V_{out}=3\,\mathrm V-R_1I_D.$$

在饱和区，
$$I_D=\frac{\beta}{2}(1\,\mathrm V-V_{TH})^2,\qquad V_{out}\ge2\,\mathrm V-V_{TH}.$$
当 $V_{in}=0$ 时，$V_{TH}=0.8934\,\mathrm V$，饱和条件允许 $\beta R_1\le333.1\,\mathrm{V^{-1}}$。取 $\beta R_1=10\,\mathrm{V^{-1}}$，$V_{in}=0$ 时 $V_{out}=2.943\,\mathrm V$，在 1.5 V 时为 2.022 V。中等负载可能进入线性区，曲线在 1 V 源极电位之上变平。

线性区方程为
$$I_D=\beta\left[(1\,\mathrm V-V_{TH})(V_{out}-1\,\mathrm V)-\frac{(V_{out}-1\,\mathrm V)^2}{2}\right].$$

当 $V_{in}>1\,\mathrm V$ 时，源-衬底结正向偏置。弱正偏和强正偏的影响取决于题目未给出的结参数和温度，因此 1.5–3 V 的延续曲线不能唯一确定。

## 答案图

![V_out 随 V_in 变化](/q/R021/solution-vout.zh.svg)

图中比较了三种 MOS-only 负载在 1.5 V 以内的曲线，并用阴影标出结正偏导致的未定量区。

## 评分说明

+2：端电压、体效应方向、负载相关的饱和或线性区条件、所求曲线以及正偏结延拓限制均正确。
+1：体驱动方向正确，但缺少负载条件或模型边界。
−2：把 $V_{in}$ 当作栅极输入，声称输出与负载无关，或在缺少结模型时断言完整范围的唯一曲线。
