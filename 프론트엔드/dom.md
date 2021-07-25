App
  Header
    Nav
      
  MainSection 
    Novel 
    # state: {fixedNovelData, subNovelData}  
    # handler: handleAddSub, handleAddRecommend
    
      ReadSentenceArea
      # state: none
      # received_props: data={fixedNovelData}
        Sentence:list

      @if
      InputSentenceBox 
      # state: text 
      # received_props: onAddSub={handleAddSub}
      # handler: handleChangeSentence, handleOnClickButton

        InputSentence 
        # received_props: text={text} onChange={handleChangeSentence}
        # handler: handleOnChange
        # event: onChange => handleOnChange(){onChange호출}

        InputTool 
        # received_props: onClickButton={onAddSub} 
        # handler: handleOnClick
        # event: onClick => handleOnClick(){onAddSub호출}

      @if
      VoteSentenceBox 
      # state: selectedId
      # received_props: onAddRecommend={handleAddRecommend} data={subNovelData}
      # handler: handleVoteSentence, handleSearchSentence

        SelectedSentence 
        # state: none
        # received_props: text={data[selectedId].text}
        # handler: none

        VoteTool
        # state: none
        # received_props: onSearchSentence={handleSearchSentence} onVoteSentence={handleVoteSentence} currentRecommend={data[selectedId].recommend}
        # handler: handleOnRecommend, handleOnSearchNext, handleOnSearchPrev

          RecommendButton
          # state: none
          # received_props: onRecommend={handleOnRecommend}
          # handler: handleOnClick

          SearchPrevButton
          # state: none
          # received_props: onSearchPrev={handleOnSearchPrev} 
          # handler: handleOnClick

          SearchNextButton
          # state: none
          # received_props: onSearchNext={handleOnSearchNext} direction={'next'}
          # handler: handleOnClick

  Footer